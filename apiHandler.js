"use strict";
const gzipResponseBuilder = require("./gzipResponseBuilder.js");
const payload = require("./payload.js");

module.exports.apiResponse = async () => {
  const data = payload.responsePayload();
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

module.exports.gzipAPIResponse = async () => {
  const data = payload.responsePayload();
  return gzipResponseBuilder.buildResponse(200, data);
};
