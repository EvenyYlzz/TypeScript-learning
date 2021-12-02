// const person1: {
//   firstName: string;
//   lastName: string;
//   age: number;
// }
// 在ts中的对象，声明时已经根据对应value自动匹配给定了类型
// 所以在ts中，不是键值对，准确的来说，应该是
// key to type，键类型对
var person1 = {
    firstName: 'alex',
    lastName: 'Even',
    age: 18
};
console.log('person1', person1);
console.log('person1.firstName', person1.firstName);
// 在原生js中，如此调用是不会报错的
// 但是在ts中，调用一个未定义的内部变量，会直接报错
// 类型“{ firstName: string; lastName: string; age: number; }”上不存在属性“what”。
console.log('person1.what', person1.what);
// 也可以显式地给定类型
var person2 = {
    firstName: 'alex',
    lastName: 'Even',
    age: 18
};
// ---------------------------------------------------------------
// 也可以笼统定义
var person3 = {
    firstName: 'alex',
    lastName: 'Even',
    age: 18
};
// 此时这里会报错，因为给定object，此时会认为是给定一个空的 {}，不确定内部情况
// 所以在ts中，object这个关键词使用到的几率很小
console.log('person3.firstName', person3.firstName);
