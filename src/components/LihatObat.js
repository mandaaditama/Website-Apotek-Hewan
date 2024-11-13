// LihatObat.js
import React from 'react';
import './LihatObat.css';

const LihatObat = () => {
  const obatData = [
    { nama: 'Adrome', penyimpanan: 'Gudang', kategori: 'Stimulan', stok: 6, kedaluwarsa: '20 August 2020', harga: 'Rp 15,000', unit: 'Kapsul' },
    { nama: 'Ambroxol', penyimpanan: 'Lemari 1', kategori: 'Anti Radang', stok: 4, kedaluwarsa: '20 August 2014', harga: 'Rp 22,000', unit: 'Semprot' },
    { nama: 'Amoxilin', penyimpanan: 'Rak 1', kategori: 'Anti Radang', stok: 9, kedaluwarsa: '14 December 2018', harga: 'Rp 10,000', unit: 'Semprot' },
    { nama: 'Asam Mefenamat', penyimpanan: 'Gudang', kategori: 'Antioksidan', stok: 11, kedaluwarsa: '20 July 2020', harga: 'Rp 4,000', unit: 'Semprot' },
    { nama: 'Cetirizine', penyimpanan: 'Rak 1', kategori: 'Anti Radang', stok: 0, kedaluwarsa: '20 January 2020', harga: 'Rp 3,000', unit: 'Tablet' },
    // Tambahkan data lainnya sesuai kebutuhan
  ];

  return (
    <div className="lihat-obat-container">
      <h2>Lihat Obat</h2>
      <button className="btn-tambah-obat">+ Tambah Obat</button>
      <table className="table-obat">
        <thead>
          <tr>
            <th>Nama Obat</th>
            <th>Penyimpanan</th>
            <th>Kategori</th>
            <th>Stok</th>
            <th>Kedaluwarsa</th>
            <th>Harga Jual</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          {obatData.map((obat, index) => (
            <tr key={index}>
              <td>{obat.nama}</td>
              <td>{obat.penyimpanan}</td>
              <td>{obat.kategori}</td>
              <td>{obat.stok}</td>
              <td>{obat.kedaluwarsa}</td>
              <td>{obat.harga}</td>
              <td>{obat.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LihatObat;