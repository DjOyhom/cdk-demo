const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();


const tabla_env = process.env.TABLA;

exports.main = async function(event, context) {
  try {
    var method = event.httpMethod;

    
    if (method === "GET") {
      if (event.path === "/") {
        if (event.queryStringParameters == null) {
          var msg = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Document</title>
              </head>
              <body style="background-color: red;">
              <h1 style="text-align: center;">Bienvenidos a las DevFest!!</h1>  
              <br>
              <h1 style="text-align: center;">
              Probate mandandome un ?name=Rodri
              </h1>  
          </body>
          </html>
          `;
        } else {
           
          var date_constru = new Date();
          var id_date = date_constru.getFullYear() + "," +
            (date_constru.getMonth() + 1) + "," +
            date_constru.getDate() + "  " +
            date_constru.getHours() + ":" +
            date_constru.getMinutes() + ":" +
            date_constru.getSeconds() + ":" +
            date_constru.getMilliseconds();


          const item = {
            id: id_date,
            name: event.queryStringParameters.name ,
            date: id_date
          };
          const savedItem = await saveItem(item);
          var msg = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Document</title>
          </head>
          <body>
            <h5 style="text-align: center;">HOLA HERMOSOS DEVELOPEEERSS 😍🥰!!</h5>
            <h1>Un saludito en especial para ` +  event.queryStringParameters.name + `!</h1> 
            <br>
            <br>
            <br>
            <h1>` + JSON.stringify(savedItem) + `</h1> 
          </body>
          </html>
          `;
        }



        return {
          statusCode: 200,
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
      body: "We only accept GET /"
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

async function saveItem(item) {
  const params = {
    TableName: tabla_env,
    Item: item
  }

  return dynamo.put(params).promise().then(() => {
    return item;
  });
}
