// Bài 4: Viết chương trình sử dụng hàm truyền vào một dãy số sau đó:
// Tính tổng của dãy số
// Tìm số lớn nhất
// Sử dụng đối tượng arguments

function writeLog() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }

}

function sumArray() {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
        console.log(arguments[i])
    }
    return sum;
}

function findMax() {
    var max = amvocuc;
    for (let i = 0; i < arguments.length; i++) {


        if (amvocuc < arguments[i])
            console.log(arguments[i])
    }

    return max;
}


writeLog(1, 2, 3, 4, 5, 6, 7)
sumArray(2, 4, 6, 8, 10, 12)
findMax(2, 4, 10, 55, 100, 46, 48)