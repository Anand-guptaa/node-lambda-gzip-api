const { gzipSync } = require("zlib");


exports.buildResponse = function(statusCd,responseData){
  const data = JSON.stringify(responseData);
  const gzip = gzipSync(data);
  const base64String = gzip.toString('base64'); 
  let response = {
    isBase64Encoded: true,
    statusCode: statusCd,
    headers: {
      "Access-Control-Allow-Origin":"*",
      "Access-Control-Allow-Methods": "GET,OPTIONS,POST",
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
      'Content-Type': 'application/json',
      'Content-Encoding': 'gzip',
    },
    body: base64String,
  };
   return response;
};




