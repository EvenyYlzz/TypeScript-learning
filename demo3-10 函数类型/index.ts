let log1 = function(message: any) {
  console.log(message)
}

let log2 = (message: any) => console.log(message)

// ----------------------------------------------------------

let log3 = (message: string, code: number) => {
  console.log(message, code)
}
log3('hello', 3)

// ----------------------------------------------------------

let log4 = (message: string, code?: number) => {
  console.log(message, code)
}
// 当给定参数一个？时，表明该参数可选，并不一定是必须传入的参数
// 此时打印的code就会是undefined
log4('hello')
log4('hello', 4)

// ----------------------------------------------------------

// 给定默认值，如果不传入code，那么就默认为number类型的0
// 还有一定需要注意的是，log4与log5的可选参数与默认参数请放在参数末尾，否则会报错
let log5 = (message: string, code: number = 0) => {
  console.log(message, code)
}

log5('hello')
log5('hello', 5)