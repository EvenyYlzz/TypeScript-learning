let drawPoint1 = (x: any, y: any) => {
  console.log('{x, y}', {x, y})
}
// x，y应作为整体传入，而不是拆开传入

// ------------------------------------------------------------

// 使用面向对象的方式来传入参数
//                point: { x: number; y: number }
let drawPoint2 = (point: { x: any; y: any }) => {
  console.log('{x, y}', {x: point.x, y: point.y})
}

drawPoint2({ x: 105, y: 24 })
drawPoint2({ x: 'aaa', y: 'bbb' })

// ------------------------------------------------------------

// 利用创建对象来改良

let drawPoint3 = (point: Point) => {
  console.log('{x, y}', {x: point.x, y: point.y})
}

drawPoint3({ x: 105, y: 24 })
// 非法输入，通过接口定义报错
drawPoint3({ x: 'aaa', y: 'bbb' })

interface Point {
  x: number,
  y: number
}