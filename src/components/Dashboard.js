import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>Sistem Informasi Apotek</h2>
        <div className="user-info">
          <span>Selamat Datang</span>
        </div>
      </header>
      <div className="dashboard-stats">
        <div className="stat-card">Total Obat: 60</div>
        <div className="stat-card">Total Kategori: 7</div>
        <div className="stat-card">Total Pemasok: 5</div>
        <div className="stat-card">Total Unit: 7</div>
        <div className="stat-card">Total Penjualan: 190k</div>
        <div className="stat-card">Total Pembelian: 494k</div>
      </div>
      <div className="dashboard-actions">
        <div className="action-card">Obat</div>
        <div className="action-card">Kategori</div>
        <div className="action-card">Pemasok</div>
        <div className="action-card">Penjualan</div>
        <div className="action-card">Kedaluwarsa</div>
        <div className="action-card">Habis</div>
        <div className="action-card">Laporan</div>
        <div className="action-card">Pembelian</div>
      </div>
    </div>
  );
}

export default Dashboard;