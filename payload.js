"use strict";
const { faker } = require("@faker-js/faker");

exports.responsePayload = function () {
  const resultArr = [];
  var resultObj = {};

  for (let i = 0; i < 10000; i++) {
    let randomName = faker.name.fullName();
    let randomEmail = faker.internet.email();
    let id = faker.datatype.uuid();
    let avatar = faker.image.avatar();
    let birthdate = faker.date.birthdate();
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();

    resultObj.name = randomName;
    resultObj.email = randomEmail;
    resultObj.id = id;
    resultObj.avatar = avatar;
    resultObj.birthdate = birthdate;
    resultObj.firstName = firstName;
    resultObj.lastName = lastName;

    resultArr.push(resultObj);
  }

  return resultArr;
};
