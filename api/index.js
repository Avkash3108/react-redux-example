var jsf = require('json-schema-faker');
var usersSchema = require('./users');
var fs = require('fs');
var faker = require('faker');

jsf.extend('faker', () => faker);
var json = JSON.stringify(jsf.generate(usersSchema));

fs.writeFile("./api/db.json", json, function (err) {
  if (err) {
    return console.log(err);
  } else {
    console.log("Mock data generated.");
  }
});