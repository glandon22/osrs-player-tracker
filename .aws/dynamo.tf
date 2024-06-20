resource "aws_dynamodb_table" "osrs-users-table" {
  name           = "osrs-users"
  billing_mode   = "PROVISIONED"
  read_capacity  = 5
  write_capacity = 5
  hash_key       = "username"
  range_key      = "unix_timestamp"

  attribute {
    name = "username"
    type = "S"
  }

  attribute {
    name = "unix_timestamp"
    type = "N"
  }

  global_secondary_index {
    name               = "GameModeSearch"
    hash_key           = "username"
    range_key          = "unix_timestamp"
    write_capacity     = 5
    read_capacity      = 5
    projection_type    = "INCLUDE"
    non_key_attributes = ["game_mode"]
  }
}