// For working with binary raw data in JS exists the text encoded and decoded classes
// which are very similar to the buffer arrays data

const textEncoder = new TextEncoder();
const encodeString = textEncoder.encode('Hello World');
console.log(encodeString);

const textDecoder = new TextDecoder();
const decodeString = textDecoder.decode(encodeString);
console.log(decodeString);