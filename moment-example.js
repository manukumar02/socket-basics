var moment = require('moment');
var now = moment();

// console.log(now.format());
// console.log(now.format('MMM Do YYYY, h:mma'));
// console.log(now.format('X'));
// console.log(now.format('x'));
 
 var timestamp = 1467228680905;
 var timestampMoment = moment.utc(timestamp);

 console.log(timestampMoment.local().format('h:mm a'));