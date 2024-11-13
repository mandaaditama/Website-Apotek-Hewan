// TambahObat.js
import React from 'react';
import './TambahObat.css';

function TambahObat() {
  return (
    <div className="tambah-obat-container">
      <h2>Tambah Obat Baru</h2>
      <form className="tambah-obat-form">
        <label>Nama Obat</label>
        <input type="text" />
        
        <label>Penyimpanan</label>
        <input type="text" />
        
        <label>Banyak Stok</label>
        <input type="number" />
        
        <label>Unit</label>
        <select>
          <option>Unit 1</option>
          <option>Unit 2</option>
        </select>
        
        <label>Kategori</label>
        <select>
          <option>Kategori 1</option>
          <option>Kategori 2</option>
        </select>
        
        <label>Tanggal Kedaluwarsa</label>
        <input type="date" />
        
        <label>Deskripsi</label>
        <textarea></textarea>
        
        <label>Harga (Rp)</label>
        <input type="number" />
        
        <button type="submit" className="save-button">Simpan</button>
      </form>
    </div>
  );
}

export default TambahObat;