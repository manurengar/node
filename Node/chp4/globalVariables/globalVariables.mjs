// There are some variables that can be accessed globally. Among the there are
// the __filename and __dirname however they cannot be accessed on REPL 
// so for simulating it we can perform the following

import {dirname} from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs';

// import.meta.url display the absolute file name of the current script
// with fileURLToPath it remove the trailing file:// of this URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__filename);
console.log(__dirname);

// Another module which is globally available is the buffer module (fs)
// which is helpful in the handling of binary data
readFile(".//data.txt", (err,data) => {
  console.log(data); // Buffer object in binary form
  console.log(data?.toString());
});