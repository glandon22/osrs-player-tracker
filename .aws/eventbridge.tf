resource "aws_cloudwatch_event_rule" "osrs-data-fetch-rule" {
  name = "osrs-data-fetch-rule"
  description = "Update OSRS player data every hour"
  schedule_expression = "rate(1 hour)"
}

resource "aws_cloudwatch_event_target" "osrs-data-fetch-lambda-target" {
  arn = aws_lambda_function.osrs-player-fetcher-lambda.arn
  rule = aws_cloudwatch_event_rule.osrs-data-fetch-rule.name
}

resource "aws_lambda_permission" "allow_cloudwatch_to_call_rw_fallout_retry_step_deletion_lambda" {
  statement_id = "AllowExecutionFromCloudWatch"
  action = "lambda:InvokeFunction"
  function_name = aws_lambda_function.osrs-player-fetcher-lambda.function_name
  principal = "events.amazonaws.com"
  source_arn = aws_cloudwatch_event_rule.osrs-data-fetch-rule.arn
}