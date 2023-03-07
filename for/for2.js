var num = prompt("请输入一个大于1的整数");
//创建一个变量来保存当前的数的状态
//默认当前num是质数
var flag = true;
//判断num是否是质数
//获取2-num之间的数
for(var i=2;i<num ; i++){
    //console.log(i);
    //判断num是否被i整除
    if(num %i == 0){
        //如果num能被i整除,则说明num一定不是质数
        //设置flag = false
        flag = false;
    }
}
//如果num是质数则输出
if(flag){
    console.log(num + "是质数！！！");
}else{
    console.log("这个不是质数");
}