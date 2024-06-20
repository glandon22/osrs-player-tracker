data "archive_file" "lambda" {
  type        = "zip"
  source_dir  = "${path.module}/../src"
  output_path = "${path.module}/../dist/src.zip"
}

resource "aws_lambda_function" "osrs-player-fetcher-lambda" {
  filename      = data.archive_file.lambda.output_path
  function_name = "osrs-player-fetcher"
  role          = aws_iam_role.lambda_role.arn
  handler       = "index.handler"
  timeout       = 100
  source_code_hash = data.archive_file.lambda.output_base64sha256

  runtime = "nodejs16.x"

  layers = [
    aws_lambda_layer_version.lambda_utils_layer.arn
  ]
  environment {
    variables = {
      DYNAMO_DB_TABLE = aws_dynamodb_table.osrs-users-table.arn
    }
  }
}

data "aws_iam_policy_document" "assume_role" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]
  }
}

resource "aws_iam_role" "lambda_role" {
  name               = "osrs-access-role"
  assume_role_policy = data.aws_iam_policy_document.assume_role.json
}

resource "aws_iam_role_policy" "lambda" {
  name = "lambda-permissions-logs"
  role = aws_iam_role.lambda_role.name
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents",
        ]
        Effect   = "Allow"
        Resource = "*"
      },
    ]
  })
}

resource "aws_iam_role_policy" "lambda1" {
  name = "lambda-permissions-dynamo"
  role = aws_iam_role.lambda_role.name
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "dynamodb:*"
        ],
        "Resource": [
            aws_dynamodb_table.osrs-users-table.arn
        ]
        Effect   = "Allow"
      },
    ]
  })
}

resource "aws_lambda_layer_version" "lambda_utils_layer" {
  layer_name          = "shared_utils"

  filename            = data.archive_file.utils_layer_code_zip.output_path
  source_code_hash    = data.archive_file.utils_layer_code_zip.output_base64sha256
  
  compatible_runtimes = [ "nodejs16.x" ]
}

data "archive_file" "utils_layer_code_zip" {
  type        = "zip"
  source_dir  = "${path.module}/../dist"
  output_path = "${path.module}/../dist/output.zip"
}