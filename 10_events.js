const EventEmitter = require('events');
class MYEmitter extends EventEmitter{}

const dummyVariable = new MYEmitter();
dummyVariable.on('waterfull',()=>{
console.log('Turn off the motor');
});
//dummyVariable.emit('event');
console.log("ya run ho rha ha lkn event fire nai hoa wo krain ga phlay");
//yahan  pa ham fire krnay lgay hain event ko
dummyVariable.emit('waterfull');