// script.js
function hitungTotal() {
    var kodeBarang = document.getElementById('kodeBarang').value;
    var namaBarang = document.getElementById('namaBarang').value;
    var harga = parseFloat(document.getElementById('harga').value);
    var jumlah = parseInt(document.getElementById('jumlah').value);

    var totalHarga = harga * jumlah;

    var result = document.getElementById('result');
    result.innerHTML = `
        <h3>Informasi Barang:</h3>
        <p><strong>Kode Barang:</strong> ${kodeBarang}</p>
        <p><strong>Nama Barang:</strong> ${namaBarang}</p>
        <p><strong>Harga Satuan:</strong> ${harga}</p>
        <p><strong>Jumlah Barang:</strong> ${jumlah}</p>
        <p><strong>Total Harga:</strong> ${totalHarga}</p>
    `;
}

function clearForm() {
    document.getElementById('kasirForm').reset();
    document.getElementById('result').innerHTML = '';
}
