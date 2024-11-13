import React from 'react';

const ObatHabis = () => {
  const dataObat = [
    { nama: 'Adrome', penyimpanan: 'Gudang', kategori: 'Stimulan', stok: 6, kedaluwarsa: '20 August 2020', harga: '15,000', unit: 'Kapsul', pemasok: 'Kenanga Apotek' },
    { nama: 'Ambroxol', penyimpanan: 'Lemari 1', kategori: 'Anti Radang', stok: 4, kedaluwarsa: '20 August 2014', harga: '22,000', unit: 'Semprot', pemasok: 'Kenanga Apotek' },
    { nama: 'Vitamin A', penyimpanan: 'Rak 2', kategori: 'Vitamin', stok: 3, kedaluwarsa: '20 February 2013', harga: '4,000', unit: 'Tablet', pemasok: 'Bina Jaya Apotek' },
    { nama: 'Vitamin E', penyimpanan: 'Rak 1', kategori: 'Vitamin', stok: 8, kedaluwarsa: '23 January 2019', harga: '4,000', unit: 'Tablet', pemasok: 'Bina Jaya Apotek' },
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
      <h2 style={{ marginBottom: '20px' }}>Obat Hampir Habis</h2>
      <p style={{ marginBottom: '20px', color: '#555' }}>Obat dengan stok kurang dari 10</p>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff' }}>
        <thead>
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Nama Obat</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Penyimpanan</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Kategori</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Stok</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Kedaluwarsa</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Harga Jual</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Unit</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Pemasok</th>
          </tr>
        </thead>
        <tbody>
          {dataObat.map((obat, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9f9f9' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{obat.nama}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{obat.penyimpanan}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{obat.kategori}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{obat.stok}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{obat.kedaluwarsa}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{obat.harga}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{obat.unit}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{obat.pemasok}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ marginTop: '10px' }}>Showing 1 to {dataObat.length} of {dataObat.length} entries</p>
    </div>
  );
};

export default ObatHabis;