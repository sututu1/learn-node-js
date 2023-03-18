(function(){
    console.log("我是一个匿名函数")
})();
//立即执行函数
//函数定义完，立即被执行
//立即执行函数往往只会执行一次
//创建一个变量
var a = 10;
function fun(){
    var a = "我是函数中的变量a";
    var b = 20;
    console.log("a ="+a);
}
fun();

function Person(name , age , gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}
Person.prototype.toString = function () {
    return "Person[name="+this.name+",age="+this.age+",gender="+this.gender+"]";
   //return "我是一个快乐的小Person";
}
var per1 = new Person("孙悟空",18,"男");
var per2 = new Person("猪八戒",18,"男");
//Person[name=孙悟空,age=18,gender=男]

var result = per.toString();
//console.log("result =" + result);
//console.log(per.__proto__.__proto__hasOwnProperty("toString"));
console.log(per1);
console.log(per2);


