import React from 'react';
import './TambahKategori.css';

function TambahKategori() {
  return (
    <div className="tambah-kategori-container">
      <h2 className="header-title">Sistem Informasi Apotek</h2>
      <h3 className="sub-title">Tambah Kategori Obat</h3>
      <form className="form-container">
        <div className="form-group">
          <label htmlFor="namaKategori">Nama Kategori</label>
          <input type="text" id="namaKategori" placeholder="Masukkan Nama Kategori" />
        </div>
        <div className="form-group">
          <label htmlFor="deskripsi">Deskripsi</label>
          <input type="text" id="deskripsi" placeholder="Masukkan Deskripsi" />
        </div>
        <div className="button-group">
          <button type="button" className="button-cancel">Batal</button>
          <button type="submit" className="button-save">Simpan</button>
        </div>
      </form>
    </div>
  );
}

export default TambahKategori;