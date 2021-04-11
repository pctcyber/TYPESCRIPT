"use strict";
/**
 * Sự khác nhau giữa var, let, const
 * + var có phạm vi hoạt động lớn hơn let
 * + const : không thể thay đổi giá trị nhưng có thể thay đổi giá trị bên trong
 */
// function tinhTongVoiVar(a: any, b: any) {
//     if (a !== 0 && b !== 0) {
//         var tong = a + b;
//     }
//     console.log(tong);
// }
// tinhTongVoiVar(5, 7);
// function tinhTongVoiLet(a: any, b: any) {
//     let tongLet;
//     if (a !== 0 && b !== 0) {
//         tongLet = a + b;
//     }
// biến let chỉ có giá trị trong scope
//     console.log(tongLet);
// }
// tinhTongVoiLet(9, 5)
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 2000);
}
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log(i_1);
    }, 5000);
};
for (var i_1 = 0; i_1 < 5; i_1++) {
    _loop_1(i_1);
}
