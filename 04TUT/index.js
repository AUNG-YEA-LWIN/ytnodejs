const logEvents = require('./logEvents');

const EventEmitter = require('events'); 

class MyEmitter extends EventEmitter {};

// initialize object
const myEmitter = new MyEmitter();

// add listener for the log event
myEmitter.on('data', (msg) => logEvents(msg));

setTimeout(() => {
    //Emit event
    myEmitter.emit('data','Log event emitted!');
},2000);



// const event = require('events');
// const logEvents = require('./logEvents');

// const myEmitter = new event.EventEmitter();

// myEmitter.on('data',(msg) => logEvents(msg));

// setTimeout(() => {
//     myEmitter.emit('data','Updated news!!!My emitter is released.');
// },2000);