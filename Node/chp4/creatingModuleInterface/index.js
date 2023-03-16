const add = require('./add');
const wordCount = require('./wordCountCommonJS');

const result = add(1,2);
const count = wordCount('Where there is much light, there is also much shadow.');
console.log(`result: ${result}`);
console.log(`result 2: ${JSON.stringify(count)}`);