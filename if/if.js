var score = prompt("请输入小明的期末成绩");
//判断值是否合法
if(score>100||score<0||isNaN(score)){
    console.log("拉出去毙了～～～");
}else{
    //根据score的值来决定给小明什么奖励
    if(score==100){
    //奖励一台宝马
    console.log("宝马，拿去～～～");
    }else if(score>=80){
    //奖励一个手机
    console.log("手机，拿去玩～～～");
    }else if(score>=60){
    //奖励一本参考书
    console.log("参考书，拿去看～～～")
    }else{
    console.log("棍子一根～～");
    }
}

