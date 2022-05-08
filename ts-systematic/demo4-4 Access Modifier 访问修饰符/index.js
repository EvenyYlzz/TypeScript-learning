var PointOne = /** @class */ (function () {
    function PointOne(x, y) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.drawPoint = function () {
            console.log('point1.x: ', _this.x, 'point1.y: ', _this.y);
        };
        this.getDistances = function (p) {
            return Math.pow(p.x - _this.x, 2) + Math.pow(p.y - _this.y, 2);
        };
    }
    return PointOne;
}());
// Access Modifier 访问修饰符
var point1 = new PointOne(24, 50);
point1.x = 30;
point1.y = 5;
// 当在类中的属性变成私有属性，同时要删除interface中的x、y属性，否则会报错
var PointTwo = /** @class */ (function () {
    function PointTwo(x, y) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.drawPoint = function () {
            console.log('point1.x: ', _this.x, 'point1.y: ', _this.y);
        };
        this.getDistances = function (p) {
            // 当将x、y删除了，这里的p.x、p.y就报错了
            // 此时我们不仅要能从外部访问x、y，同时这两个属性还得保持它们的私有隔离
            // 此时就需要借助到getter、setter
            // return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2)
            return Math.pow(p.getX() - _this.x, 2) + Math.pow(p.getY() - _this.y, 2);
        };
        this.setX = function (value) {
            if (value < 0) {
                throw new Error('value不能小于0');
            }
            _this.x = value;
        };
        this.getX = function () {
            return _this.x;
        };
        this.setY = function (value) {
            if (value < 0) {
                throw new Error('value不能小于0');
            }
            _this.y = value;
        };
        this.getY = function () {
            return _this.y;
        };
    }
    return PointTwo;
}());
// Access Modifier 访问修饰符
var point2 = new PointTwo(24, 50);
point2.setX(10);
console.log('point2.getX()', point2.getX());
var PointThree = /** @class */ (function () {
    function PointThree(x, y) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.drawPoint = function () {
            console.log('point1.x: ', _this.x, 'point1.y: ', _this.y);
        };
        this.getDistances = function (p) {
            return Math.pow(p.X - _this.x, 2) + Math.pow(p.Y - _this.y, 2);
        };
    }
    Object.defineProperty(PointThree.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('value不能小于0');
            }
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PointThree.prototype, "Y", {
        get: function () {
            return this.y;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('value不能小于0');
            }
            this.y = value;
        },
        enumerable: false,
        configurable: true
    });
    return PointThree;
}());
// 习惯在声明私有属性时，给私有属性加一个_.
var point3 = new PointThree(24, 50);
point3.X = 10;
console.log('point3.X', point3.X);
