let a = Number(prompt("Nhập số a:"));
let b = Number(prompt("Nhập số b:"));
let phepTinh = prompt("Nhập phép tính (+, -, *, /):");

let ketQua;
if (phepTinh == "+") {
    ketQua = a + b;
} else if (phepTinh == "-") {
    ketQua = a - b;
} else if (phepTinh == "*") {
    ketQua = a * b;
} else if (phepTinh == "/") {
    ketQua = a / b;
} else {
    ketQua = "Phép tính không hợp lệ";
}

alert("Kết quả: " + ketQua);
   
    