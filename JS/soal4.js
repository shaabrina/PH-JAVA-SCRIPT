// script.js
function cekKepribadian() {
    // Mengambil input golongan darah dari user
    var golonganDarah = document.getElementById('golonganDarah').value.toUpperCase();
    var hasilKepribadianEl = document.getElementById('hasilKepribadian');

    // Kondisional untuk cek kepribadian berdasarkan golongan darah
    switch (golonganDarah) {
        case 'A':
            hasilKepribadianEl.innerHTML = "Identik dengan sifatnya yang terorganisir, kritis, tenang dalam menghadapi masalah";
            break;
        case 'B':
            hasilKepribadianEl.innerHTML = "Semangat yang tinggi, aktif, kreatif, dan selalu ingin tahu";
            break;
        case 'AB':
            hasilKepribadianEl.innerHTML = "Memiliki karakter yang kritis, rasional, bertanggung jawab, suka menolong dan mudah beradaptasi";
            break;
        case 'O':
            hasilKepribadianEl.innerHTML = "Sikapnya yang mudah beradaptasi dengan lingkungan baru atau easy-going";
            break;
        default:
            hasilKepribadianEl.innerHTML = "Golongan darah tidak valid.";
            break;
    }
}
