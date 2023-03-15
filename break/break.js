for(var i=0 ; i<5 ; i++){
    console.log(i);
    if(i == 2){
        break;
    }
}
/* 可以为循环语句创建一个label,来标识当前的循环
 * label：循环语句
 * 使用break语句时，可以在break后跟着一个label。
 * 这样break将会结束指定的循环，而不是最近的
 */
outer:
for(var h=0 ; h<9 ; h++){
    console.log("@外层循环"+h)
    for(var f=0 ;f<9 ; f++){
        break outer;
        console.log("内层循环:"+f)
    }
}
/* contniue关键字可以用来跳过当次循环
 * 同样continue也是默认只会离它最近的循环循环起作用
 */
for(var i=0 ; i<5 ; i++){
    if(i == 2){
        continue;
    }
    console.log(i);
}