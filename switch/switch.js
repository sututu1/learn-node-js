/* 对于成绩大于60分的，输出‘合格‘。
  低于60分的，输出’不合格‘。
*/

var score = 45;
switch(parseInt(score/10)){
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
        console.log("合格");
        break;
    default:
        console.log("不合格");
}