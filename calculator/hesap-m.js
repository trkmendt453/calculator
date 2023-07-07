let btn = document.querySelectorAll("#btn");
let input = document.getElementById("ekran");
let btn1 = document.getElementById("#btn1");
let btn2 = document.querySelectorAll("#btn2");
let remove2 = document.getElementById("temizle2")
let remove1 = document.getElementById("temizle");
let sayac = 0;

btn.forEach(number => {
    number.addEventListener("click", ekle)

    function ekle() {
        if (input.textContent == "0") {
            input.textContent = "";
        }
        input.textContent += number.textContent;
        if (sayac == 1) {
            sayac--;
        }
    }
});

function hesapla() {
    input.textContent = eval(input.textContent);

}
btn2.forEach(opt => {
    opt.addEventListener("click", opt1)

    function opt1() {
        if (sayac == 0) {
            input.textContent += opt.textContent;
            sayac++;
        }
    }
});
remove1.addEventListener("click", fullTemizle);

function fullTemizle() {
    input.textContent = "0";
}
remove2.addEventListener("click", remove3);

function remove3() {
    input.textContent = input.textContent.toString().split('').slice(0, -1).join('');
}