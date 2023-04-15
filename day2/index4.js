//console.log("Hello World")
/*let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);*/

const list = [7, 4, 3, 1, 2];
function sort(list) {
    for (var j = 0; j < list.length - 1; j++) {
        for (var i = 0; i < list.length - 1 - j; i++) {
            if (list[i] > list[i + 1]) {
                var temp = list[i];
                list[i] = list[i + 1];
                list[i + 1] = temp;
            }
        }
    }
}
sort(list);
console.log(list);

var arr=[10,9,4,3,2,1];
arr.sort(function(a,b){
    return a-b;
});
console.log(arr)

var array = [1,4,-8,-3,6,12,9,8];
function quickSort(arr){
//如果数组长度小于等于1，则返回数组本身
    if(arr.length<=1){
        return arr;
    }
    //定义中间值的索引
    var index = Math.floor(arr.length/2);
    //取到中间值
    var temp = arr.splice(index,1);
    //定义左右部分数组
    var left = [];
    var right = [];
    for(var i=0;i<arr.length;i++){
    //如果元素比中间值小，那么放在左边，否则放右边
        if(arr[i]<temp){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(temp,quickSort(right));
}
console.log(quickSort(array));


