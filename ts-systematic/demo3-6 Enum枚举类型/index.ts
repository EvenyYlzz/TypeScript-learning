enum Color1 {
  red,
  green,
  blue
}

let color1 = Color1.blue

// 打印的是blue在枚举中的顺序
console.log('color1', color1) // 2

// -----------------------------------------------------------------

// 变成从5开始算
enum Color2 {
  red = 5,
  green,
  blue
}

let color2 = Color2.blue

// 打印的是blue在枚举中的顺序
console.log('color2', color2) // 7

// 也可以每个枚举值各自指定对应数字
// -----------------------------------------------------------------

// 变成从5开始算
enum Color3 {
  red = 'red',
  green = 'green',
  blue = 3
}

let color3 = Color3.green

// 打印的是blue在枚举中的顺序
console.log('color3', color3) // green