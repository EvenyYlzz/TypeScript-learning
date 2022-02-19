var s1 = Symbol();
var s2 = Symbol();
console.log(s1); // Symbol()
console.log(typeof s1); // symbol
console.log(s1 === s2); // false
// ----------------------------------------------------
var s3 = Symbol();
var s4 = Symbol();
console.log(s3); // Symbol()
console.log(typeof s3); // symbol
console.log(s3 === s4); // false
// ----------------------------------------------------
var s5 = Symbol["for"]('foo');
var s6 = Symbol["for"]('foo');
// Symbol.for会去全局查找是否已经存在对应标识符对应的symbol值
// 如果存在，直接返回，如果不存在，则新建一个symbol值
console.log(s5 === s6); // => true
