// // Bài 5: Viết chương trình giải phương trình bậc 2: ax^2 + bx + c = 0 (xét tất cả các trường hợp).
// var a = prompt("Nhập hệ số a: ");
// var b = prompt("Nhập hệ số b: ");
// var c = prompt("Nhập hệ số c: ");

// if (a == "" || b == "" || c == "" || a == null || b == null || c == null) {
//     console.log('Không được bỏ trống');
// } else {
//     if (a == 0) {
//         if (b == 0 && c == 0) {
//             console.log("Phương trình vô số nghiệm!");
//         } else if (b == 0 && c != 0) {
//             console.log("Phương trình vô nghiệm!");
//         } else if (b != 0 && c != 0) {
//             console.log("Phuong trinh co nghiem: " + (-c / b));
//         }
//     } else {
//         var delta = Math.pow(b, 2) - (4 _ a _ c);
//         if (delta < 0) {
//             console.log("Phương trình vô nghiệm");
//         } else if (delta == 0) {
//             console.log("Phương trình có nghiệm kép x1 = x2 = " + (-b / (2 _ a)));
//         } else {
//             var x1 = (-b - Math.sqrt(delta)) / (2 _ a);
//             var x2 = (-b + Math.sqrt(delta)) / (2\ * a);
//             console.log("Phương trình có 2 nghiệm phân biệt x1 = " + x1 + ", x2 = " + x2);
//         }
//     }
// }