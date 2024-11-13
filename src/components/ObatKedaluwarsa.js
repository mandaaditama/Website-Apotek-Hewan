import React from "react";
import "./ObatKedaluwarsa.css";

const ObatKedaluarsa = () => {
  // Data contoh. Ganti dengan data dinamis jika diperlukan.
  const dataObat = [
    {
      nama: "Adrome",
      penyimpanan: "Gudang",
      kategori: "Stimulan",
      stok: 6,
      kedaluwarsa: "20 August 2020",
      harga: "15,000",
      unit: "Kapsul",
      pemasok: "Kenanga Apotek",
    },
    {
      nama: "Ambroxol",
      penyimpanan: "Lemari 1",
      kategori: "Anti Radang",
      stok: 4,
      kedaluwarsa: "20 August 2014",
      harga: "22,000",
      unit: "Semprot",
      pemasok: "Kenanga Apotek",
    },
    {
      nama: "Amoxilin",
      penyimpanan: "Rak 1",
      kategori: "Anti Radang",
      stok: 9,
      kedaluwarsa: "14 December 2018",
      harga: "10,000",
      unit: "Semprot",
      pemasok: "Tina Farma",
    },
    {
      nama: "Asam Mefenamat",
      penyimpanan: "Gudang",
      kategori: "Antioksidan",
      stok: 11,
      kedaluwarsa: "20 July 2020",
      harga: "4,000",
      unit: "Semprot",
      pemasok: "Bina Jaya Apotek",
    },
    {
      nama: "Cefadroxil",
      penyimpanan: "Lemari 1",
      kategori: "Anti Radang",
      stok: 10,
      kedaluwarsa: "20 January 2020",
      harga: "3,000",
      unit: "Tablet",
      pemasok: "Kenanga Apotek",
    },
  ];

  return (
    <div className="obat-kedaluarsa">
      <h2>Sistem Informasi Apotek</h2>
      <h3>Obat Kedaluwarsa</h3>

      <div className="alert">
        <strong>Peringatan!</strong> Obat sudah kedaluwarsa. Harap menambahkan
        obat yang baru.
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Nama Obat</th>
            <th>Penyimpanan</th>
            <th>Kategori</th>
            <th>Stok</th>
            <th>Kedaluwarsa</th>
            <th>Harga Jual</th>
            <th>Unit</th>
            <th>Pemasok</th>
          </tr>
        </thead>
        <tbody>
          {dataObat.map((obat, index) => (
            <tr key={index}>
              <td>{obat.nama}</td>
              <td>{obat.penyimpanan}</td>
              <td>{obat.kategori}</td>
              <td>{obat.stok}</td>
              <td>{obat.kedaluwarsa}</td>
              <td>{obat.harga}</td>
              <td>{obat.unit}</td>
              <td>{obat.pemasok}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ObatKedaluarsa;
