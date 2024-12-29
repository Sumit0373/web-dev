// now here we import this data from the maths file 

import{sum , pi} from "./maths.js";

/* 

The error happens because your file (script.js) uses ES module syntax (import/export), but Node.js isn't sure how to handle it since:

.js files are treated as CommonJS by default in Node.js.
Your package.json doesn't specify "type": "module" to explicitly tell Node.js to treat .js files as ES modules.
What is an ES Module?
An ES Module allows you to break your code into reusable pieces using import and export.
Example:

javascript
// math.js (Exporting)
export const add = (a, b) => a + b;

// app.js (Importing)
import { add } from './math.js';
console.log(add(2, 3)); // 5


Fix the Error
Update package.json: Add "type": "module" to specify ES module usage.

json
Copy code
{
  "type": "module"
}


*/



console.log(pi);


// here we use random-word npm package which we use import
//use npm install random-words form

// Here we import give random word



import { generate, count } from "random-words";
console.log(generate());

