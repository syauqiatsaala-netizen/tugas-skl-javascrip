
let totalpendapat = 0;

function tambahpendapat(){
    let inputnama = document.getElementById('inputnama');
    let inputkategori = document.getElementById('inputkategori');
    let inputpendapat = document.getElementById('inputpendapat');

    let nama = inputnama.value;
    let kategori = inputkategori.value;
    let pendapat = inputpendapat.value;

    if (nama === '' || pendapat === ""){
        alert("harap isi nama dan pendapat anda");
        return;
    }

    let tekskosong = document.getElementById('tekskosong');
    if (tekskosong) {
        tekskosong.style.display = "none";
    }

    let itempendapat = document.createElement('section');
    itempendapat.className = 'item-pendapat';

    itempendapat.innerHTML =
    "<h3>" + nama + "<span class='badge'>" + kategori +
    "</span></h3>" + "<p>" + pendapat + "</p>";

    let daftarpendapat = document.getElementById('daftarpendapat');
    daftarpendapat.appendChild(itempendapat);

    totalpendapat = totalpendapat + 1;

    let jumlahpendapat = document.getElementById('jumlahpendapat');
    jumlahpendapat.innerText = totalpendapat;

    inputnama.value = "";
    inputpendapat.value = "";
}
