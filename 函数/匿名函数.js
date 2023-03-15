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