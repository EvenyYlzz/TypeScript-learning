interface IPoint {
  drawPoint: () => void;
  getDistances: (p: IPoint) => number;
  X: number
  Y: number
}

export class Point implements IPoint {
  constructor(private x: number, private y: number) {
  }

  drawPoint = () => {
    console.log('point1.x: ', this.x, 'point1.y: ', this.y);
  };
  getDistances = (p: IPoint) => {
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
