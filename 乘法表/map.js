const m = new Map();
m.set('a', 'aa');
m.set('b', 'bb');

//删
m.delete('b');
m.clear();

//改
m.set("a", 'aa');
/*给定两个数组，编写一个函数来计算它们的交集。
示例1:
输入：nums1 = [1,2,2,1]
输出：【2】
输入：nums1 = 「4，9，5】，nums2 = 【9，4，9，8，4】
输出；[9,4]
*/
var intersection = function (nums1, nums2) {
    const map = new Map();
    nums1.forEach(n => {
        map.set(n, true);
    });
    const res = [];
    nums2.forEach(n => {
        if (map.get(n)) {
            res.push(n);
            map.delete(n);
        }
    });
    return res;
}