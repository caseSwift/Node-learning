const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

console.log(myUrl.href)



myUrl.searchParams.append('asc','Vektor')
console.log(myUrl.searchParams)

myUrl.searchParams.forEach((value,name) => 
    console.log(`${name}`));