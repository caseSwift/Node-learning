const EventEmitter = require('events');

class MyEventEmitter extends EventEmitter{ }

const myEventEmitter = new MyEventEmitter();

myEventEmitter.on('event',() => console.log('event fired'))

myEventEmitter.emit('event');