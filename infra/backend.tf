terraform {
  backend "s3" {
    bucket         = "backend-projeto"
    key            = "lambda-kitchen/terraform.tfstate"
    region         = "us-east-2"
    
  }
}
