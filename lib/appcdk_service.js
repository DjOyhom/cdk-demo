const cdk = require("aws-cdk-lib");
const { Construct } = require("constructs");
const apigateway = require("aws-cdk-lib/aws-apigateway");
const lambda = require("aws-cdk-lib/aws-lambda");
const dynamodb = require("aws-cdk-lib/aws-dynamodb");

class AppCDKServices extends Construct {
    constructor(scope, id) {
      super(scope, id);
  
      const tabla1 = new dynamodb.Table(this, "tabla1",{
          partitionKey: { name: "id", type: dynamodb.AttributeType.STRING}
      });
  
      const api = new apigateway.RestApi(this, "gateway", {
        restApiName: "El Api Gateway",
        description: "This service serves widgets."
      });
  
      // Lambda GET--------------------------------------------------------------
      const lambda_get = new lambda.Function(this, "lambda_get", {
        runtime: lambda.Runtime.NODEJS_14_X, // So we can use async in widget.js
        code: lambda.Code.fromAsset("elcode"),
        handler: "lambda_get.main",
        environment: {
          TABLA: tabla1.tableName
        }
      });
    
  
      tabla1.grantReadWriteData(lambda_get);
  
      const lambda_get_integration = new apigateway.LambdaIntegration(lambda_get, {
        requestTemplates: { "application/json": '{ "statusCode": "200" }' }
      });
  
      api.root.addMethod("GET", lambda_get_integration); // GET /
      // Lambda GET--------------------------------------------------------------
      
      
      
      
      const lambda_post = new lambda.Function(this, "lambda_post", {
          runtime: lambda.Runtime.NODEJS_14_X, // So we can use async in widget.js
          code: lambda.Code.fromAsset("elcode"),
          handler: "lambda_post.main",
          environment: {
            TABLA: tabla1.tableName
          }
      });
      tabla1.grantReadWriteData(lambda_post);
  
      const lambda_post_integration = new apigateway.LambdaIntegration(lambda_post, {
        requestTemplates: { "application/json": '{ "statusCode": "200" }' }
      });
  
      api.root.addMethod("POST", lambda_post_integration); // POST /
  
  
    }
  }
  
  module.exports = { AppCDKServices }