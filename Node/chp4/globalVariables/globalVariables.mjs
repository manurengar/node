// There are some variables that can be accessed globally. Among the there are
// the __filename and __dirname however they cannot be accessed on REPL 
// so for simulating it we can perform the following

import {dirname} from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs';
import { create } from 'domain';

// Console object is global
console.time('process');

// import.meta.url display the absolute file name of the current script
// with fileURLToPath it remove the trailing file:// of this URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__filename);
console.log(__dirname);

// Another module which is globally available is the buffer module (fs)
// which is helpful in the handling of binary data
readFile("Node\\chp4\\globalVariables\\data.txt", (err,data) => {
  console.log(data); // Buffer object in binary form
  console.log(data?.toString());
});

// Also we can use JavaScript functions like the setTimeout setInterval and the clear of its functions to perform periodically timed
// functionality here
let counter = 1;
const interval = setInterval(() => {
  console.log(`${counter} interaction`);
  if(counter++ > 2) {
    clearInterval(interval);
  }
}, 1000);

// shows the time passed by
console.timeEnd('process');

// Variables defined within an file are only visible on that file.
// For making them visible outside the module we can attch them to the global object
// WARNING! Do not use global variables too much
function createGlobal() {
  global.myName = 'Peter';
}
createGlobal();
console.log(myName);

