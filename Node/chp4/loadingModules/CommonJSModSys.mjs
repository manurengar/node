// This file explains how to load modules through the CommonJS Module System which will be replaced 

// It uses the require keyword to load a module
const os = require('os');
console.log(os.uptime());

// or we can just extract certain functions using destructuring
const {uptime} = require('os');
console.log(uptime());