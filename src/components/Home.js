// Home.js
import React, { useState } from "react";
import TambahObat from "./TambahObat";
import LihatObat from "./LihatObat";
import ObatKedaluwarsa from "./ObatKedaluwarsa";
import ObatHabis from "./ObatHabis";
import Dashboard from "./Dashboard";
import "./Home.css";

function Home() {
  const [activePage, setActivePage] = useState("dashboard");
  const [isObatOpen, setIsObatOpen] = useState(false); // State untuk membuka/tutup sub-menu "Obat"

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const toggleObatMenu = () => {
    setIsObatOpen(!isObatOpen); // Toggle menu "Obat"
  };

  return (
    <div className="home-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <img
            className="sidebar-logo"
            src="https://placekitten.com/100/100" // Ganti dengan logo sesuai
            alt="Logo"
          />
          <h2>Rumah Sakit Hewan</h2>
        </div>
        <ul className="sidebar-menu">
          <li onClick={() => handlePageChange("dashboard")}>Beranda</li>

          {/* Menu Obat dengan fitur collapsible */}
          <li onClick={toggleObatMenu} className="sidebar-menu-item">
            Obat {isObatOpen ? "▲" : "▼"}
          </li>
          {isObatOpen && (
            <ul className="submenu">
              <li onClick={() => handlePageChange("tambahObat")}>
                Tambah Obat
              </li>
              <li onClick={() => handlePageChange("lihatObat")}>Lihat Obat</li>
              <li onClick={() => handlePageChange("obatKedaluwarsa")}>
                Obat Kedaluwarsa
              </li>
              <li onClick={() => handlePageChange("obatHabis")}>Obat Habis</li>
            </ul>
          )}

          <li onClick={() => handlePageChange("kategoriUnit")}>
            Kategori & Unit 
          </li>

          <li onClick={() => handlePageChange("TambahKategori")}>TambahKategori</li>

          <li onClick={() => handlePageChange("pemasok")}>Pemasok</li>

          <li onClick={() => handlePageChange("penjualan")}>Penjualan</li>

          <li onClick={() => handlePageChange("pembelian")}>Pembelian</li>
        </ul>
      </div>

      <div className="content">
        {activePage === "dashboard" && <Dashboard />}
        {activePage === "tambahObat" && <TambahObat />}
        {activePage === "lihatObat" && <LihatObat />}
        {activePage === "obatKedaluwarsa" && <ObatKedaluwarsa />}
        {activePage === "obatHabis" && <ObatHabis />}
      </div>
    </div>
  );
}

export default Home;
