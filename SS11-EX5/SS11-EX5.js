let canNang = prompt(" Nhập cân nặng (kg) của bạn:");
let chieuCao = prompt ("Nhập chiều cao (m) của bạn:");
let BMI = canNang / ( chieuCao * chieuCao);
if (BMI < 18.5) {
    alert ("Bạn thuộc nhóm Thấp,Gầy");
} else if (BMI < 23) {
    alert("Bình thường");
} else if (BMI < 25) {
    alert("Thừa cân");
} else {
    alert("Béo phì");
} 