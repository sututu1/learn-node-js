/*const nums1 = [1,2,2,1];
const nums2 = [2,2];
var intersection = function(nums1,nums2) {
    return [...new Set(nums1)].filter(n => nums2.includes(n));
}*/

let mySet = new Set();
mySet.add(1);
mySet.sdd(5);
mySet.add("some text");
let p = { a: 1,b: 2 };
mySet.add(p);
mySet.add({ a: 1, b: 2});
const has = mySet.has(p);
mySet.delete(5);
for(let [key,value] of mySet.entries()) console.log(key.value);

const myArr = Array.from(mySet);
const mySet2 = new Set([1,2,3,4]);

const intersection = new Set([...mySet].filter(x => mySet2.has(x)));
const difference = new Set([...mySet].filter(x => !mySet2.has(x)));
console.log(mySet2);