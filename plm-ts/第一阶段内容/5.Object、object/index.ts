const person1 = {
  firstName: 'plm',
  lastName: 'Even',
  age: 18
}

// ----------

const person2: {
  firstName: string,
  lastName: string,
  age: number
} = {
  firstName: 'plm',
  lastName: 'Even',
  age: 18
}

console.log(person2.age)

// person2.age = true

// console.log(person2.what)

// ---------------
// object、Object {}
let person3: object = {
  firstName: 'plm',
  lastName: 'Even',
  age: 18
}

// object 空的 {} ，不确定内部情况的
console.log(person3.age)

