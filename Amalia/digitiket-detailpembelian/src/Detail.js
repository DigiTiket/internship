import React from 'react';
import './Detail.css';
import LogoBack from './images/Vectorarrow-left.png';
import LogoQR from './images/frame 1QR.png';


function Detail() {
  return (
    <div className="detail">
      <div class="detail-title">
        <img class="logo-back" src={LogoBack} alt="logo-back" ></img>
        <p class="title">Detail Pembelian</p>
      </div>
      <div class="detail-div">
        <table class="detail-content">
          <tr>
            <td class="col1">ID Order</td>
            <td class="col2">:</td>
            <td>1162837629</td>
          </tr>
          <tr>
            <td>Status</td>
            <td >:</td>
            <td>Lunas</td>
          </tr>
          <tr>
            <td>Metode Pembayaran</td>
            <td >:</td>
            <td>Transfer Bank</td>
          </tr>
          <tr>
            <td>Total Pembayaran</td>
            <td >:</td>
            <td>Rp. 35.000</td>
          </tr>
        </table>
        <img class="logo-qr" src={LogoQR} alt="logo-qr" ></img>
      </div>
      <div class="detail-div">
        <p class="title">Informasi Pembeli</p>
        <table class="detail-content">
          <tr>
            <td class="col1">Nama</td>
            <td class="col2">:</td>
            <td>David Al</td>
          </tr>
          <tr>
            <td>Email</td>
            <td >:</td>
            <td>aldavid@gamil.com</td>
          </tr>
          <tr>
            <td>Nomor Handphone</td>
            <td >:</td>
            <td>0812 7627 8261</td>
          </tr>
          <tr>
            <td>Tanggal pemesanan</td>
            <td >:</td>
            <td>Tanggal pemesanan</td>
          </tr>
        </table>
      </div>
      <div class="detail-div">
        <p class="title">Informasi Tiket</p>
        <table class="detail-content">
          <tr>
            <td class="col1">Nama Kegiatan</td>
            <td class="col2">:</td>
            <td>Virtual Tour 1001 Candi</td>
          </tr>
          <tr>
            <td>Jadwal</td>
            <td >:</td>
            <td>Minggu, 3 Januari 2020 - 10:00 - 12.00</td>
          </tr>
          <tr>
            <td>Tour Guide</td>
            <td >:</td>
            <td>Maulana Afham</td>
          </tr>
          <tr>
            <td>Host</td>
            <td >:</td>
            <td>Talcha</td>
          </tr>
        </table>
      </div>
      <div class="detail-div rincian-div">
      <p class="title">Rincian Pembayaran</p>
        <table class="table-rincian">
        <tr>
          <th class="rincian-col1">Nama Tiket</th>
          <th class="rincian-col2">Harga</th>
          <th class="rincian-col3">Jumlah</th>
          <th class="rincian-col4">Total</th>
        </tr>
        <tr>
            <td class="rincian-col1">Virtual Tour 1001 Candi</td>
            <td class="rincian-col2">Rp. 35.000</td>
            <td class="rincian-col3">1 Tiket</td>
            <td class="rincian-col4">Rp. 35.000</td>
          </tr>
          <tr>
            <td class="rincian-col1">Diskon</td>
            <td class="rincian-col2">Rp. 0</td>
            <td class="rincian-col3"></td>
            <td class="rincian-col4">Rp. 0</td>
          </tr>
          <tr>
            <td class="rincian-col1">Biaya Layanan</td>
            <td class="rincian-col2">Rp. 0</td>
            <td class="rincian-col3"></td>
            <td class="rincian-col4">Rp. 0</td>
          </tr>
          <tr>
            <td class="rincian-col1">Penggunaan Kredit</td>
            <td class="rincian-col2">Rp. 0</td>
            <td class="rincian-col3"></td>
            <td class="rincian-col4">Rp. 0</td>
          </tr>
          <tr>
            <th class="rincian-col1">Total Pembayaran</th>
            <th class="rincian-col2"></th>
            <th class="rincian-col3"></th>
            <th class="rincian-col4">Rp. 35.000</th>
          </tr>
        </table>
      </div>
       
    </div>
  );
}

export default Detail;