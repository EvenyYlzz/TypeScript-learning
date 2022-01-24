// 数组类型
// 数组中可以存放任意类型的数据
// JS中数组的宽容度非常大，而TS也很好得继承了这一点

// 创建一个全部都是数字类型的数组
let list1: number[] = [1,2,3,4]

//利用泛型创建数组，在泛型的Array中填充每一个元素为number类型
let list2: Array<number> = [1,2,3,4]

// 直接创建
let list3 =[1,2,3,4]

// 混合类型
let list4 = [1, 'ddd']

// 声明时定义
let list5: any[] = [1, 'ddd', true]
// 注意list4与list5的区别
// list4是number或字符串，而list5是any

let list6: (string|number)[] = [1, 'ddd']
// ----------------------------------------------------------

// 是一个数组，但更准确的说法是 固定长度、固定类型的数组（元组）
let person1: [number, string] = [1, 'ddd']

person1[0] = 'aaa'
person1[1] = 1
person1[2] = 2
// 以上3个赋值都是错误的
person1.push(3) // 这样却不报错，可以说是元组的“bug”

let person2 = [1, 'ddd']
person2[0] = 'ddd'
person2[1] = 1
person2[3] = 2
// 不报错哦，可看出有区别于person1，这算是union array，联合数组