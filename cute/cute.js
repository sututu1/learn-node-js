var myname = 'cute';
var age = 21;
var address = '航空星球';
var email = 'cute@qq.com';
var gz = 1000;
var put = '我叫' + myname + ',我今年' + age + '岁，我住在' + address + ',我工资是1000元';
console.log(put);

var temp;
var uname1 = '可可';
var uname2 = '咕叽';
temp = uname1;
uname1 = uname2;
uname2 = temp;
console.log(uname1, uname2)

function getMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
var re = getMax([43, 34, 32, 55, 24, 4]);
console.log(re);

//先序遍历
const bt = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null,
    },
    right: {
        val: 4,
        left: null,
        right: nulll,
    },
    right: {
        val: 5,
        left: null,
        right: null,
    },

    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null.
        }
    },
};


module.exports = bt;

const bt = require('./bt');
const preorder = (root) => {
    if (!root) { return; }
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
}
preorder(bt);
