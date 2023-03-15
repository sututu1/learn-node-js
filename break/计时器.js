//测试如下的程序的性能
//在程序执行前，开启器
//console.time(“计时器的名字)可以用来开启一个计时器
//它需要一个字符串作为参数，这个字符串将会作为计时器的标识
console.time("test");

//打印2-100之间所有的数
for(var i=2 ; i<=100000 ; i++){
    var flag = true;
    for(var j=2 ; j<Math.sqrt(i) ; j++){
        if(i%j == 0){
            //如果进入判断则证明i不是质数，修改flag值为false
            flag = false;
            //一旦进入判断，则证明i不可能是质数，此时循环再执行已经没有任何意义了
            //使用break来结束循环
            break;
        }
    }
    //如果是质数，则打印i的值
    if(flag){
        console.log(i);
    }
}
//终止计时器
//console.timeEnd()用来停止一个计时器，需要一个计时器的名字作为参数
console.timeEnd("test");
//可以通过Math.sqrt()对一个数进行开方
var result = Math.sqrt();
console.log("result = "+result)