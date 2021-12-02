// 悬浮函数名称看到function printResult(): void
// 说明这个函数的返回值为void
function printResult1() {
    console.log('ddd1');
}
// 这样也是可以的，但其实在Js中并不存在void类型
// 所以当编译为js文件时，会发现其实打印了一个undefined
function printResult2() {
    console.log('ddd2');
}
console.log(printResult2());
