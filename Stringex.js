const name="hitesh"
const repocount=50

console.log(name+repocount+" this is not a good syntax");

//Below method of writing code is called String interpolation
console.log(`Hello My name is ${name.toUpperCase()} and my repocount is ${repocount}`);

const gameName=new String("hitesh-hc")
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__)

// console.log(gameName.length);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));

const newString=gameName.substring(0,4)
console.log(newString);

const str1=gameName.slice(-8,4)
console.log(str1);

const str2="   hitesh   "
console.log(str2.trimStart())

let url="https://hitesh.com/hitesh%20choudhary";
url=url.replace('%20','-')
console.log(url);
console.log(url.includes('hit'))

console.log(gameName.split('-'));

var str = "Javatpoint";  
console.log(str.slice(-5,-1));  

var s1=new String("abc")
var s2=new String("abc")

console.log(s1==s2);