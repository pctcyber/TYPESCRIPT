
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

for(var i = 0; i<5; i++){

    setTimeout(() => {
        console.log(i);
        
    },2000)
}

for(let i = 0; i<5; i++){

    setTimeout(() => {
        console.log(i);
        
    },5000)
}