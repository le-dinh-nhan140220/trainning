Bài 1: Viết chương trình nhập chiều dài a, chiều rộng b của hình chữ nhật. Tính chu vi và diện tích của hình chữ nhật đó.
var chieuDai = prompt("Nhập chiều dài: ");
var chieuRong = prompt("Nhập chiều rộng: ");
chieuDai = Number(chieuDai);
chieuRong = Number(chieuRong);

var chuVi = (chieuDai + chieuRong) _ 2;
var dienTich = chieuDai _ chieuRong;

console.log("Chu vi: " + chuVi);
console.log("Dien tich: " + dienTich);
Bài 2: Viết chương trình nhập bán kính R của hình tròn. Tính chu vi và diện tích của hình tròn đó.
var banKinhStr = prompt("Nhập bán kính: ");

if (banKinhStr === '' || banKinhStr === null) {
alert('Vui long nhap!');
} else if (isNaN(banKinhStr)) {
alert("Vui lòng nhập bán kính là số!");
} else {

    const PI = 3.14;

    var banKinh = Number(banKinhStr);
    var chuVi = banKinh * 2 * PI;
    var dienTich = banKinh * banKinh * PI;

    console.log("Chu vi: " + chuVi);
    console.log("Dien tich: " + dienTich);

Bài 3: Viết chương trình nhập 2 số a, b. Tính tổng, hiệu, tích, thương (chia lấy số thập phân, lấy phần dư).
var a = prompt("Nhập a: ");
var b = prompt("Nhập b: ");

a = Number(a);
b = Number(b);

var tong = a + b;
var hieu = a - b;
var tich = a \* b;
var thuong = a / b;
var du = a % b;

console.log("Tổng: " + tong);
console.log("Hiệu: " + hieu);
console.log("Tich: " + tich);
console.log("Thương: " + thuong);
console.log("Số dư: " + du);
Bài 4: Viết chương trình giải phương trình bậc 1: ax + b = 0 (xét tất cả các trường hợp).
var a = prompt("Nhập hệ số a: ");
var b = prompt("Nhập hệ số b: ");
if (a === '' || b === '' || a === null || b === null) {
alert('Vui long nhap!');
} else if (isNaN(a) || isNaN(b)) {
console.log("Nhập hệ số không đúng định dạng số!");
} else if (a === 0) {
console.log("Vui long nhap he so a khac 0!");
} else {
console.log("Phuong trinh co nghiem: " + (-b / a));
}
Bài 5: Viết chương trình giải phương trình bậc 2: ax^2 + bx + c = 0 (xét tất cả các trường hợp).
var a = prompt("Nhập hệ số a: ");
var b = prompt("Nhập hệ số b: ");
var c = prompt("Nhập hệ số c: ");

if (a == "" || b == "" || c == "" || a == null || b == null || c == null) {
console.log('Không được bỏ trống');
} else {
if (a == 0) {
if (b == 0 && c == 0) {
console.log("Phương trình vô số nghiệm!");
} else if (b == 0 && c != 0) {
console.log("Phương trình vô nghiệm!");
} else if (b != 0 && c != 0) {
console.log("Phuong trinh co nghiem: " + (-c / b));
}
} else {
var delta = Math.pow(b, 2) - (4 _ a _ c);
if (delta < 0) {
console.log("Phương trình vô nghiệm");
} else if (delta == 0) {
console.log("Phương trình có nghiệm kép x1 = x2 = " + (-b / (2 _ a)));
} else {
var x1 = (-b - Math.sqrt(delta)) / (2 _ a);
var x2 = (-b + Math.sqrt(delta)) / (2 \* a);
console.log("Phương trình có 2 nghiệm phân biệt x1 = " + x1 + ", x2 = " + x2);
}
}
}
Bài 6: Đọc hiểu chương trình sau và ghi chép những gì đã học được
var check = true;
var chieuDai = prompt("Nhập chiều dài: ");

if (chieuDai === '' || chieuDai === null) {
console.log("Vui lòng nhập chiều dài!");
check = false;
} else if (isNaN(chieuDai)) {
console.log("Nhập chiều dài không đúng định dạng số!");
check = false;
} else if (chieuDai <= 0) {
console.log('Chiều dài phải lớn hơn 0');
check = false;
}

var chieuRong = prompt("Nhập chiều rộng: ");

if (chieuRong === '' || chieuRong === null) {
console.log("Vui lòng nhập chiều rộng!");
check = false;
} else if (isNaN(chieuRong)) {
console.log("Nhập chiều rộng không đúng định dạng số!");
check = false;
} else if (chieuRong <= 0) {
console.log('Chiều rộng phải lớn hơn 0');
check = false;
}

if (check) {
chieuDai = Number(chieuDai);
chieuRong = Number(chieuRong);

    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;

    console.log("Chu vi: " + chuVi);
    console.log("Dien tich: " + dienTich);

}
