var Color1;
(function (Color1) {
    Color1[Color1["red"] = 0] = "red";
    Color1[Color1["green"] = 1] = "green";
    Color1[Color1["blue"] = 2] = "blue";
})(Color1 || (Color1 = {}));
var color1 = Color1.blue;
// 打印的是blue在枚举中的顺序
console.log('color1', color1); // 2
// -----------------------------------------------------------------
// 变成从5开始算
var Color2;
(function (Color2) {
    Color2[Color2["red"] = 5] = "red";
    Color2[Color2["green"] = 6] = "green";
    Color2[Color2["blue"] = 7] = "blue";
})(Color2 || (Color2 = {}));
var color2 = Color2.blue;
// 打印的是blue在枚举中的顺序
console.log('color2', color2); // 7
// 也可以每个枚举值各自指定对应数字
// -----------------------------------------------------------------
// 变成从5开始算
var Color3;
(function (Color3) {
    Color3["red"] = "red";
    Color3["green"] = "green";
    Color3[Color3["blue"] = 3] = "blue";
})(Color3 || (Color3 = {}));
var color3 = Color3.green;
// 打印的是blue在枚举中的顺序
console.log('color3', color3); // green
