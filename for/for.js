//创建一个变量，用来保存偶数之和
var sum = 0;
//打印1-100之间的数
for(i = 0;i <= 100;i++){
    //判断i是否是偶数
    //能被2整除的数数
    if(i%2==0){
        //如果i除以2没有余数则证明是偶数
        //console.log(i);
        sum +=i;
    }
}
console.log("偶数之和为："+sum);

var p = Promise.all([p1,p2,p3]);
console(p);