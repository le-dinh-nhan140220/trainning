// bai4: Viết chương trình giải phương trình bậc 1: ax + b = 0 (xét tất cả các trường hợp).
function giaiptbacnhat(a, b) {
    if (a == 0 && b == 0) {
        alert('Phương trình vô số nghiệm');
    } else if (a != 0 && b == 0) {
        alert('Phương trình có nghiệm x = 0');
    } else if (a == 0 && b != 0) {
        alert("Phương trình vô nghiệm");
    } else {
        alert('Phương trình có nghiệm x = ' + (-b / a));
    }
}