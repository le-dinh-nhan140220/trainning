// Bài 3: Tạo menu như sau:
// == GIẢI PHƯƠNG TRÌNH ==

// BẬC 1
// BẬC 2
// THOÁT


const menu = 'Giai Phuong Trinh'
var input = prompt('Menu')
if (input == 1) {
    var a = inputNumber('Nhap he so a')
    var b = inputNumber('Nhap he so b')

    input(a, b)
} else if (input == 2) {
    var a = inputNumber('Nhap he so a')
    var b = inputNumber('Nhap he so b')
    var c = inputNumber('Nhap he so c')
    input(a, b, c)
} else {
    console('Exit')
}