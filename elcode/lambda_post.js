const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB;


const tabla_env = process.env.TABLA;

exports.main = async function(event, context) {
  try {
    var method = event.httpMethod;

    var msg =  await savedItems();

    if (method === "POST") {
      if (event.path === "/") {
        return {
          statusCode: 500,
          headers: {
            'Content-Type': 'text/html'
          },
          body: msg
        };
      }
    }
    
    // We only accept GET for now
    return {
      statusCode: 400,
      headers: {},
      body: "We only accept POST /"
    };
  } catch(error) {
    var body = error.stack || JSON.stringify(error, null, 2);
    return {
      statusCode: 400,
      headers: {},
      body: JSON.stringify(body)
    }
  }
}

async function savedItems() {
  const params = {
    TableName: tabla_env
  }
  var items = (await dynamo.scan(params).promise()).Items;
  return JSON.stringify(items);
}

