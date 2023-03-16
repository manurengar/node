// first way of importing default exports
//import divide from './divide.mjs';

// combined form of named and default exports
import divide, {add} from "./divide.mjs";
import { wordCount as wc } from "./wordCountECMA.mjs";

console.log('resut ' + divide(4,2));
console.log(`result: ${add(1,2)}`);
const count = wc('Where there is much light, there is also much shadow.');
console.log(`result 2: ${JSON.stringify(count)}`);
