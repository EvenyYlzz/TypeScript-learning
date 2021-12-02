// 悬浮函数名称看到function printResult(): void
// 说明这个函数的返回值为void
function printResult1() {
  console.log('ddd1')
}

// 这样也是可以的，但其实在Js中并不存在void类型
// 所以当编译为js文件时，会发现其实打印了一个undefined
function printResult2(): void {
  console.log('ddd2')
}

console.log(printResult2())

// ----------------------------------------------------

// 当什么都不返回的情况下，定义返回类型为undefined，会报错
function printResult3(): undefined {
  console.log('ddd3')
}

// 增加一个return就不会报错啦
function printResult4(): undefined {
  console.log('ddd4')
  return
//return undefined
}

// ----------------------------------------------------

// function throwError1(message: string, errorCode: number): void
// void在这其实是不准确的，请看下面
function throwError1(message: string, errorCode: number) {
  throw {
    message,
    errorCode
  }
}

throwError1('not found1', 404)


function throwError2(message: string, errorCode: number): never {
  throw {
    message,
    errorCode
  }
  // 函数在上面会直接拦截抛出错误，是执行不到这里的，所以正确返回类型应该是never
}

throwError2('not found2', 505)

// 如果是死循环也是会让函数无法执行完成的
function whileLoop(): never {
  while(true) {
    console.log('true')
  }
}