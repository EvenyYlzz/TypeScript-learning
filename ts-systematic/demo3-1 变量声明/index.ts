// 3-1 变量声明
var number1 = 1
let number2 = 2
const number = 3

function doSomething() {
  for(let i=0; i<5 ; i++) {
    console.log(i)
  }
  // 会直接提示报错，静态类型检查，在编译阶段发现错误
  console.log('finally i =', i)
}

doSomething()