
// const person1: {
//   firstName: string;
//   lastName: string;
//   age: number;
// }
// 在ts中的对象，声明时已经根据对应value自动匹配给定了类型
// 所以在ts中，不是键值对，准确的来说，应该是
// key to type，键类型对

const person1 = {
  firstName: 'alex',
  lastName: 'Even',
  age: 18
}

console.log('person1', person1)
console.log('person1.firstName', person1.firstName)

// 在原生js中，如此调用是不会报错的
// 但是在ts中，调用一个未定义的内部变量，会直接报错
// 类型“{ firstName: string; lastName: string; age: number; }”上不存在属性“what”。
console.log('person1.what', person1.what)


// 也可以显式地给定类型
const person2: {
  firstName: string,
  lastName: string,
  age: number,
} = {
  firstName: 'alex',
  lastName: 'Even',
  age: 18
}

// ---------------------------------------------------------------

// 也可以笼统定义
const person3: object = {
  firstName: 'alex',
  lastName: 'Even',
  age: 18
}

// 此时这里会报错，因为给定object，此时会认为是给定一个空的 {}，不确定内部情况
// 所以在ts中，object这个关键词使用到的几率很小
console.log('person3.firstName', person3.firstName)

// ---------------------------------------------------------------

const person4: Object = {
  firstName: 'alex',
  lastName: 'Even',
  age: 18
}

console.log('person4.firstName', person4.firstName)

// ---------------------------------------------------------------

let person5: Object
person5 = '111'

let person6: object
person6 = '111' // 不能将类型“string”分配给类型“object”。ts(2322)

let person7: {}
person7 = '111'

// - 1. `object`是`ts 2.2`中引入的新类型，用于表示非原始类型。ts中的原始类型有: `string，number，symbol，bigint，undefined，null，boolean`。原始类型不能赋值给 `object` 类型的变量
// - 2. `Object`表示包含`toString, hasOwnProperty`等方法的`JavaScript`对象。所有的值（包含原始类型和非原始类型）都可以赋值给`Object`类型的变量
// - 3. `{}`表示空对象，基本上跟`Object`类型是一样的。可以使用`Object`中`prototype`上面的方法，可以将原始类型赋值给`{}`类型的变量