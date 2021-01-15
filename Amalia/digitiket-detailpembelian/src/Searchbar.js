import React from 'react';
import './Searchbar.css';
import searchlogo from './images/search 1.png';

function Searchbar() {
  return (

    <div class="searchbar" >
      <img class="searchlogo" src={searchlogo} alt="searchlogo" />
      <p class="searchtext">Temukan Event, Wahana Wisata , Virtual Tour, Lain-lain</p>
    </div>
  );
}

export default Searchbar;