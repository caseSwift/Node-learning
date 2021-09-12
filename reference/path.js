const path = require('path');


console.log(path.dirname(__filename))
console.log(path.dirname(__dirname))
console.log(path.extname(__dirname)) // extension name only

console.log(path.join(__dirname,'test','hello.html'));
