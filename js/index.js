// Fungsi untuk menampilkan konten segitiga
function segitiga() {
  document.getElementById("segitiga_content").style.display = "block";
  document.getElementById("jajargenjang_content").style.display = "none";
  // resetJajargenjang();
}

// Fungsi untuk menampilkan konten jajar genjang
function jajarGenjang() {
  document.getElementById("segitiga_content").style.display = "none";
  document.getElementById("jajargenjang_content").style.display = "block";
  // resetSegitiga();
}

// Tampilan default ketika halaman dibuka
window.onload = function () {
  segitiga();
};

// Fungsi Hitung Luas Segitiga
function hitungSegitiga() {
  let alas = document.getElementById("alas_segitiga").value;
  let tinggi = document.getElementById("tinggi_segitiga").value;
  let luas = 0.5 * alas * tinggi;

  document.getElementById("detail_hitung_segitiga").innerHTML = `L = 1/2 * a * t <br> L = 1/2 * ${alas} * ${tinggi}`;
  document.getElementById("hasil_segitiga").innerHTML = "L = " + luas;
}

// Fungsi Hitung Luas Jajar Genjang
function hitungJajargenjang() {
  let alas = document.getElementById("alas_jajargenjang").value;
  let tinggi = document.getElementById("tinggi_jajargenjang").value;
  let luas = alas * tinggi;

  document.getElementById("detail_hitung_jajargenjang").innerHTML = `L = a * t <br> L = ${alas} * ${tinggi}`;
  document.getElementById("hasil_jajargenjang").innerHTML = "L = " + luas;
}

// Fungsi Button Reset Segitiga
function resetSegitiga() {
  document.getElementById("alas_segitiga").value = "";
  document.getElementById("tinggi_segitiga").value = "";
  document.getElementById("detail_hitung_segitiga").innerHTML = "";
  document.getElementById("hasil_segitiga").innerHTML = "";
}

// Fungsi Button Reset Jajar Genjang
function resetJajargenjang() {
  document.getElementById("alas_jajargenjang").value = "";
  document.getElementById("tinggi_jajargenjang").value = "";
  document.getElementById("detail_hitung_jajargenjang").innerHTML = "";
  document.getElementById("hasil_jajargenjang").innerHTML = "";
}
