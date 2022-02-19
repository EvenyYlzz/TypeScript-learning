var number1 = 1;
var number11 = '5';
var number2 = 2;
var number3 = 3;
function add(n1, n2) {
    return n1 + n2;
}
// 定义类型后，会在编写阶段就检查出错误
console.log(add(number11, number2));
console.log(add(number1, number2));
// -------------------------------------------
// 自动映射数据类型
var isTue = true;
// 定义时已经指定了类型，不能将类型“string”分配给类型“boolean”。
isTue = '1111';
// 手动指定类型
var isFalse = false;
var total = 0;
var userName = 'EvenyYl';
