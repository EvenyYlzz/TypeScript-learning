interface IPoint {
  x: number,
  y: number,
  // 打印当前点信息
  drawPoint: () => void;
  // 计算两点之间距离
  getDistances: (p: IPoint) => number;
}

class Point implements IPoint {
  // 成员变量
  // x: number;
  // y: number;  这样会报错
  x!: number;
  y!: number;
  drawPoint = () => {
    console.log('x: ', this.x, 'y: ', this.y);
  };
  getDistances = (p: IPoint) => {
    return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2)
  }
}

// point通过new之后所产生的实例就是对象
// point实例、对象
const point = new Point()
point.x = 2
point.y = 3
// 不赋值则为undefined
point.drawPoint()

// 在该例子中
// 类是Point

// ------------------------------------------------------------------

class PointOne implements IPoint {
  // 成员变量
  // x: number;
  // y: number;  这样会报错
  x!: number;
  y!: number;

  // 可结合构造函数

  // 在这里因为是给公有属性传参，所以可以用public参数
  // 改写例子看下面
  constructor(x: number, y: number) {
  // 通过构造函数传参可以生成一些模版
  // 在构造函数中将这些值给到自身的成员变量上，也就是自身的属性上
  // 但是这一过程有点繁琐
  // -------------------------------------------------------
  // 在这一点上，ts帮我们做了优化
  // 通过使用访问修饰符，在声明构造函数的同时
  // 顺便完成成员变量的声明
  // 只需要在构造函数的参数中，加上public、private、protected
    this.x = x
    this.y = y
  }

  drawPoint = () => {
    console.log('point1.x: ', this.x, 'point1.y: ', this.y);
  };
  getDistances = (p: IPoint) => {
    return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2)
  }
}

// 实例过程中传值
const point1 = new PointOne(3, 4)
point1.drawPoint()

// javascript中的构造函数不可以重载overload

// ---------------------------------------------------------------------

class PointTwo implements IPoint {
  constructor(public x: number, public y: number) {
  }

  drawPoint = () => {
    console.log('point2.x: ', this.x, 'point2.y: ', this.y);
  };
  getDistances = (p: IPoint) => {
    return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2)
  }
}

const point2 = new PointTwo(4, 5)
point2.drawPoint()