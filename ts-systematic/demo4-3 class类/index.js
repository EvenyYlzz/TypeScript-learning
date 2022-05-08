var Point = /** @class */ (function () {
    function Point() {
        var _this = this;
        this.drawPoint = function () {
            console.log('x: ', _this.x, 'y: ', _this.y);
        };
        this.getDistances = function (p) {
            return Math.pow(p.x - _this.x, 2) + Math.pow(p.y - _this.y, 2);
        };
    }
    return Point;
}());
// point通过new之后所产生的实例就是对象
// point实例、对象
var point = new Point();
point.x = 2;
point.y = 3;
// 不赋值则为undefined
point.drawPoint();
// 在该例子中
// 类是Point
// ------------------------------------------------------------------
var PointOne = /** @class */ (function () {
    // 可结合构造函数
    // 在这里因为是给公有属性传参，所以可以用public参数
    // 改写例子看下面
    function PointOne(x, y) {
        var _this = this;
        this.drawPoint = function () {
            console.log('point1.x: ', _this.x, 'point1.y: ', _this.y);
        };
        this.getDistances = function (p) {
            return Math.pow(p.x - _this.x, 2) + Math.pow(p.y - _this.y, 2);
        };
        // 通过构造函数传参可以生成一些模版
        // 在构造函数中将这些值给到自身的成员变量上，也就是自身的属性上
        // 但是这一过程有点繁琐
        // -------------------------------------------------------
        // 在这一点上，ts帮我们做了优化
        // 通过使用访问修饰符，在声明构造函数的同时
        // 顺便完成成员变量的声明
        // 只需要在构造函数的参数中，加上public、private、protected
        this.x = x;
        this.y = y;
    }
    return PointOne;
}());
// 实例过程中传值
var point1 = new PointOne(3, 4);
point1.drawPoint();
// javascript中的构造函数不可以重载overload
// ---------------------------------------------------------------------
var PointTwo = /** @class */ (function () {
    function PointTwo(x, y) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.drawPoint = function () {
            console.log('point2.x: ', _this.x, 'point2.y: ', _this.y);
        };
        this.getDistances = function (p) {
            return Math.pow(p.x - _this.x, 2) + Math.pow(p.y - _this.y, 2);
        };
    }
    return PointTwo;
}());
var point2 = new PointTwo(4, 5);
point2.drawPoint();
