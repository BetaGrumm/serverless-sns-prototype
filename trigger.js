var AWS = require('aws-sdk'); // must be npm installed to use
var sns = new AWS.SNS({
  endpoint: 'http://127.0.0.1:4002',
  region: 'us-west-2',
});
sns.publish(
  {
    Message: JSON.stringify({ default: 'PONG!' }),
    MessageStructure: 'json',
    TopicArn: 'arn:aws:sns:us-east-1:123456789012:mktest-topic',
  },
  () => {
    console.log('ping');
  }
);
