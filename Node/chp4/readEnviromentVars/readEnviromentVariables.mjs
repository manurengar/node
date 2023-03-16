// If we initiate the program with the following
// node program.mjs --env=debug
import process from  'process';

console.log(process.argv[0]); ///home/pi/.nvm/versions/node/v16.19.1/bin/node
console.log(process.argv[1]); // /home/pi/node/Node/chp4/readEnviromentVars/readEnviromentVariables.mjs
console.log(process.argv[2]); // --env=debug

// see versions of current libraries on json format
console.log(process.versions);

// get current user
console.log(process.geteuid());

// set user id
//console.log(process.seteuid('1001'));

//console.log(process.geteuid());