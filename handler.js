'use strict';
var AWS = require('aws-sdk');

module.exports.migrator = (event, context, callback) => {
  console.log('Pong...');
  //   var sns = new AWS.SNS({
  //     endpoint: 'http://127.0.0.1:4002',
  //     region: 'us-east-2',
  //   });
  //   sns.publish(
  //     {
  //       Message: JSON.stringify({ default: 'hello!' }),
  //       MessageStructure: 'json',
  //       TopicArn: 'arn:aws:sns:us-west-2:785930863329:DevOps',
  //     },
  //     () => {
  //       console.log('sns published...');
  //       callback(null, { response: 'return from lambda' });
  //     }
  //   );
};
