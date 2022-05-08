let list1: number[] = [1,2,3,4]
let list2: Array<number> = [1,2,3,4]
let list3: Array<string> = ['1','2','3','4']
// 类型+箭头括号<>

// 不一定非要用T，只不过这是约定俗成的写法
// let lastInArray = <T>(arr: Array<T>) => {
//   return arr[arr.length-1]
// }

let lastInArray = <T>(arr: T[]) => {
  return arr[arr.length-1]
}

const l1 = lastInArray([1,2,3,4])

// let lastInArray = (arr: Array<any>) => {
//   return arr[arr.length-1]
// }
// 让这个方法不仅能处理数字还能处理字符串
// 直接number改为any，但这是不好的做法

const l2 = lastInArray(['a', 'b', 'c'])

const l3 = lastInArray<string>(['a', 'b', 'c'])
// 可以箭头函数指定输入输出类型

const l4 = lastInArray<string | number>(['a', 'b', 'c'])

// 通过泛型保持代码的类型一致性

// ------------------------------------------------------------------

// let makeTuple = (x: number, y: string) => [x,y]
// 给这个两个类型安排不同的泛型处理
let makeTuple = <T, Y>(x: T, y: Y) => [x,y]

// 还可以给定默认类型
// let makeTuple = <T, Y = number>(x: T, y: Y) => [x,y]
// const v3 = makeTuple<boolean>(true, 1)

const v1 = makeTuple(1, 'one')
const v2 = makeTuple(true, 1)
const v3 = makeTuple<boolean, number>(true, 1)
// 形成了元组类型