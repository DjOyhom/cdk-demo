const { Stack, Duration } = require('aws-cdk-lib');
// const sqs = require('aws-cdk-lib/aws-sqs');
const appcdk_services = require('../lib/appcdk_service');


class AppcdkStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AppcdkQueue', {
    //   visibilityTimeout: Duration.seconds(300)
    // });
    new appcdk_services.AppCDKServices(this, 'AppCDKTest');

  }
}

module.exports = { AppcdkStack }
