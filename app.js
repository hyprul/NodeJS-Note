console.log("Starting app.js");

const fs = require("fs");
const os = require("os");
const _ = require('lodash');
const notes = require("./notes.js");

// console.log(_.isString(true));
// console.log(_.isString("Andrew"));

var filteredArray = _.uniq([2,3,4,1,2,3,4,10])
console.log(filteredArray)


// var res = notes.addNote();
// console.log(res);

var add = notes.add(3, 5);
console.log('Result:', add);

var subtract = notes.subtract(8, -2);
console.log(subtract);
// var user = os.userInfo();

// fs.appendFileSync("greetings.txt", `Hello ${user.username}! You are ${notes.age}.`);
/////
