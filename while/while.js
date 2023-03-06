/* 假如投资的年利率为5%，试求从1000块增长到100000块，
   需要花费多少年
*/
// 定义一个变量，表示当前的钱数
var money = 1000;
//定义一个计数器
var count = 0;
// 定义一个while循环来计算每年的钱数
while(money < 100000){
    money *= 1.05;
    //使count自增
    count++;
}
console.log("一共需要"+count+"年");
