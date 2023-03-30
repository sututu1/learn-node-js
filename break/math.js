var reg = new RegExp("a","i");
var str = "a";
var result = reg.test(str);
console.log(reg.test("Aa"));

 var reg = /a/i;
console.log(typeof reg);
console.log(reg.test("abc"));

var str = "1a2b3c4d5e6f7"
var result = str.split(/[A-z]/);
console.log(result);

str = "hello abc aec afc";
result = str.search(/a[bef]c/);
console.log(result);

 str = "1a2b3c4d5e6f7"
 result = str.match(/[A-z]/g);
console.log(result);

var reg = /a{3}/;
reg = /(ab){3}/;
reg = /ab+c/;
console.log(reg.test("abbc"))
