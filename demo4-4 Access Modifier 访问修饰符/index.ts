interface IPoint {
  x: number,
  y: number,
  drawPoint: () => void;
  getDistances: (p: IPoint) => number;
}

class PointOne implements IPoint {
  constructor(public x: number, public y: number) {
  }

  drawPoint = () => {
    console.log('point1.x: ', this.x, 'point1.y: ', this.y);
  };
  getDistances = (p: IPoint) => {
    return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2)
  }
}

// Access Modifier 访问修饰符
const point1 = new PointOne(24, 50)
point1.x = 30
point1.y = 5
// 以上这种在外部直接访问内部成员变量，甚至重新赋值的操作是非常危险的
// 需要通过访问修饰符对访问class内部方法、变量加以限制


// point1.
// 当打出point1.的时候会提示一些能看到的变量x、y，还有方法
// 有这些提示是因为这些都是公有属性、公有方法
// 详情见下面将public改成private


// 在ts中，有三个访问修饰符
// public、private、protected
// 没写访问修饰符的属性、方法，默认为public

// ----------------------------------------------------------------------

interface IPoint2 {
  drawPoint: () => void;
  getDistances: (p: IPoint2) => number;
  getX: () => number
  getY: () => number
  setX: (value: number) => void
  setY: (value: number) => void
}

// 当在类中的属性变成私有属性，同时要删除interface中的x、y属性，否则会报错
class PointTwo implements IPoint2 {
  constructor(private x: number, private y: number) {
  }

  drawPoint = () => {
    console.log('point1.x: ', this.x, 'point1.y: ', this.y);
  };
  getDistances = (p: IPoint2) => {
    // 当将x、y删除了，这里的p.x、p.y就报错了
    // 此时我们不仅要能从外部访问x、y，同时这两个属性还得保持它们的私有隔离
    // 此时就需要借助到getter、setter
    // return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2)

    return Math.pow(p.getX() - this.x, 2) + Math.pow(p.getY() - this.y, 2)
  }

  setX = (value: number) => {
    if (value < 0) {
      throw new Error('value不能小于0')
    }
    this.x = value
  }

  getX = () => {
    return this.x
  }

  setY = (value: number) => {
    if (value < 0) {
      throw new Error('value不能小于0')
    }
    this.y = value
  }

  getY = () => {
    return this.y
  }
  // 通过setter、getter可以在内部跟外部之间设立一层缓冲带，可以在这避免一些非法输入
  // 简单来说就是把class私有属性封装一下，让外部通过特定的方法去访问私有属性
}

// Access Modifier 访问修饰符
const point2 = new PointTwo(24, 50)
point2.setX(10)
console.log('point2.getX()', point2.getX())

// point2.setX(-9)
// 赋值-9编译器不报错，但是运行的时候会抛出该异常

// 此时输入point2.
// 会看到两个私有属性x、y没有提示，只提示了另外两个方法

// point2.x
// 强制访问私有属性，ide报错，属性“x”为私有属性，只能在类“PointTwo”中访问。ts(2341)
// 也就是说，现在x、y变成了在类内部this关键词才能访问的变量了

// ----------------------------------------------------------------------------
// 简洁写法，懒人包


interface IPoint3 {
  drawPoint: () => void;
  getDistances: (p: IPoint3) => number;
  X: number
  Y: number
}

class PointThree implements IPoint3 {
  constructor(private x: number, private y: number) {
  }

  drawPoint = () => {
    console.log('point1.x: ', this.x, 'point1.y: ', this.y);
  };
  getDistances = (p: IPoint3) => {
    return Math.pow(p.X - this.x, 2) + Math.pow(p.Y - this.y, 2)
  }

  set X(value: number) {
    if (value < 0) {
      throw new Error('value不能小于0')
    }
    this.x = value
  }

  get X() {
    return this.x
  }

  set Y(value: number) {
    if (value < 0) {
      throw new Error('value不能小于0')
    }
    this.y = value
  }

  get Y() {
    return this.y
  }
}
// 习惯在声明私有属性时，给私有属性加一个_.

const point3 = new PointThree(24, 50)
point3.X = 10
console.log('point3.X', point3.X)

// 报Accessors are only available when targeting ECMAScript 5 and higher.
// tsc -t es5 index.ts