const sortFn = (a, b) => {
    if (a[a.length - 1] < b[b.length - 1]) {
      return -1; // 负数 => a < b，a 在 b 之前
    } else if (a[a.length - 1] > b[b.length - 1]) {
      return 1; // 正数 => a > b，a 在 b 之后
    }
    return 0; // 0 => a = b，a 和 b 保持原来的顺序
  }
  myArray.sort(sortFn);

  const a = ['a', 'b', 'c', 'd', 'a', 'b'];
console.log(a.lastIndexOf('b')); // 5

// 再试一次，这次从最后一次匹配之前开始
console.log(a.lastIndexOf('b', 4)); // 1
console.log(a.lastIndexOf('z')); // -1

const ai = ['a', 'b', 'c'];
ai.forEach((element) => {
  console.log(element);
});

const a1 = ['a', 'b', 'c'];
const a2 = a1.map((item) => item.toUpperCase());
console.log(a2); // ['A', 'B', 'C']