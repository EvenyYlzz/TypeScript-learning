let union1: string | number
// 正确
union1 = 1
union1 = 'ddd'
// 错误
union1 = []
union1 = true

// -----------------------------------------------------------------

let union2: number | string | boolean | string[]

function add(n1: number, n2: number) {
  return n1 + n2
}

let addNumber = add(2, 5)
let addString = add('hello', 'world')
// 需要拓展add方法，不仅能合并相加数字，也要能处理其它类型，如下：

function merge(n1: number | string, n2: number | string) {
  if (typeof n1 === 'string' || typeof n2 === 'string') {
    return String(n1) + String(n2)
  } else {
    return n1 + n2
  }
}

let mergeNumber = merge(2,5)
let mergeString = merge('hello', 'world')
console.log('mergeNumber', mergeNumber)
console.log('mergeString', mergeString)

// -----------------------------------------------------------------

// 联合类型，并且确定取值范围，那么就是字面量类型
let union3: 0 | 1 | 2
const number1 = 100 // 特指数字中的100，也是字面量类型
// 正确
union3 = 1
// 错误
union3 = 4

let literal : 1 | '2' | true | [1,2,3,4]

// -----------------------------------------------------------------

function mergeLiteral(
  n1: number | string,
  n2: number | string,
  resultType: 'as-number' | 'as-string'
) {
  if (resultType === 'as-string') {
    return String(n1) + String(n2)
  }
  if (typeof n1 === 'string' || typeof n2 === 'string') {
    return String(n1) + String(n2)
  } else {
    return n1 + n2
  }
}

let mergeLiteralNumber1 = mergeLiteral(2, 5, 'as-number')
let mergeLiteralNumber2 = mergeLiteral(2, 5, 'as-string')
let mergeLiteralString = mergeLiteral('hello', 'world', 'as-string')

console.log('--------------------------------------------------------')
console.log('mergeLiteralNumber1', mergeLiteralNumber1)
console.log('mergeLiteralNumber2', mergeLiteralNumber2)
console.log('mergeLiteralString', mergeLiteralString)