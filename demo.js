const { get } = require("http");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tinhTuoi(namsinh){
    const namhientai = new Date().getFullYear();
    return namhientai - namsinh;
}

rl.question("Nhập họ tên: ", (Hoten) => {
    rl.question("Nhập năm sinh: ", (namsinh) => {
        console.log("Họ tên: " + Hoten);
        console.log("Tuổi: " + tinhTuoi(namsinh));
        rl.close();
    });
});
