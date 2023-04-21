function sun(a, b, c) {
    //console.log(a + b + c); 
    var d = a + b + c
    return d;
}
//调用函数
//变量result的值就是函数的执行结果
var result = sun(4, 5, 8);
console.log("result = " + result);

function isOu(num) {
    return num % 2 == 0

}
var result = isOu(3);
console.log("result = " + result);

function sayHello(o) {
    // console.log("o = "+o)
    console.log("我是" + o.name + ",今年我" + o.age + "岁了," + "我是一个" + o.gender + "人" + ",我住在" + o.address)

}
var obj = {
    name: "孙悟空",
    age: 18,
    gender: "男",
    address: "花果山"
};
sayHello(obj);

/*
* mianji ()
* -调用函数 相当于使用的函数的返回值
* mianji
* -函数对象 相当于直接使用函数对象
*/