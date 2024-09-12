// Fungsi untuk menampilkan konten luas segitiga
function luas() {
  document.getElementById("luas_content").style.display = "block";
  document.getElementById("keliling_content").style.display = "none";
  resetKeliling();

  setActiveButton("btn_luas");
}

// Fungsi untuk menampilkan konten keliling segitiga
function keliling() {
  document.getElementById("luas_content").style.display = "none";
  document.getElementById("keliling_content").style.display = "block";
  resetLuas();

  setActiveButton("btn_keliling");
}

// Fungsi untuk mengatur class active
function setActiveButton(buttonId) {
  // Menghapus kelas active dari semua tombol
  const buttons = document.querySelectorAll(".button_rumus");
  buttons.forEach((button) => button.classList.remove("active"));

  // Menambahkan kelas active pada tombol yang dipilih
  document.getElementById(buttonId).classList.add("active");
}

// Tampilan default ketika halaman dibuka
window.onload = function () {
  luas();
};

// Fungsi Form validation untuk luas Segitiga
function validasiLuas(alas, tinggi) {
  let errorMessage = "";

  // Cek apakah alas dan tinggi kosong atau bukan angka
  if (isNaN(alas) || isNaN(tinggi)) {
    errorMessage = "Alas dan Tinggi tidak boleh kosong!";
  } else if (!alas && !tinggi) {
    errorMessage = "Alas dan Tinggi tidak boleh kosong!";
  } else if (!alas) {
    errorMessage = "Alas tidak boleh kosong!";
  } else if (!tinggi) {
    errorMessage = "Tinggi tidak boleh kosong!";
  }

  if (errorMessage) {
    document.getElementById("detail_luas").innerHTML = errorMessage;
    return false;
  }

  return true;
}

// Fungsi Hitung Luas Segitiga
function hitungLuas() {
  let alas1 = document.getElementById("alas").value;
  let tinggi1 = document.getElementById("tinggi").value;

  // Convert nilai ke angka
  alas1 = parseFloat(alas1);
  tinggi1 = parseFloat(tinggi1);

  // Validasi input
  if (!validasiLuas(alas1, tinggi1)) {
    return;
  }

  let luas = 0.5 * alas1 * tinggi1;
  document.getElementById("detail_luas").innerHTML = `L = 1/2 * a * t <br> L = 1/2 * ${alas1} * ${tinggi1}`;
  document.getElementById("hasil_luas").innerHTML = "L = " + luas;
}

// Fungsi Validasi Rekursif untuk Keliling Segitiga dengan cek NaN
function validasiKeliling(sisi1, sisi2, sisi3) {
  let errorMessage = "";

  // Cek apakah sisi-sisi kosong atau bukan angka
  if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
    errorMessage = "Semua sisi harus berupa angka!";
  } else if (!sisi1 && !sisi2 && !sisi3) {
    errorMessage = "Semua sisi tidak boleh kosong!";
  } else if (!sisi1) {
    errorMessage = "Sisi 1 tidak boleh kosong!";
  } else if (!sisi2) {
    errorMessage = "Sisi 2 tidak boleh kosong!";
  } else if (!sisi3) {
    errorMessage = "Sisi 3 tidak boleh kosong!";
  }

  if (errorMessage) {
    document.getElementById("detail_keliling").innerHTML = errorMessage;
    return false;
  }

  return true;
}

// Fungsi Hitung Keliling Segitiga
function hitungKeliling() {
  let sisi1 = document.getElementById("sisi1").value;
  let sisi2 = document.getElementById("sisi2").value;
  let sisi3 = document.getElementById("sisi3").value;

  // Convert nilai ke angka
  sisi1 = parseFloat(sisi1);
  sisi2 = parseFloat(sisi2);
  sisi3 = parseFloat(sisi3);

  // Validasi input
  if (!validasiKeliling(sisi1, sisi2, sisi3)) {
    return;
  }

  let keliling = sisi1 + sisi2 + sisi3;
  document.getElementById("detail_keliling").innerHTML = `K = a + b + c <br> K = ${sisi1} + ${sisi2} + ${sisi3}`;
  document.getElementById("hasil_keliling").innerHTML = "K = " + keliling;
}

// Fungsi Button Reset Luas Segitiga
function resetLuas() {
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";

  document.getElementById("detail_luas").innerHTML = "";
  document.getElementById("hasil_luas").innerHTML = "";
}

// Fungsi Button Reset Keliling Segitiga
function resetKeliling() {
  document.getElementById("sisi1").value = "";
  document.getElementById("sisi2").value = "";
  document.getElementById("sisi3").value = "";

  document.getElementById("detail_keliling").innerHTML = "";
  document.getElementById("hasil_keliling").innerHTML = "";
}
