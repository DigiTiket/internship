import React from 'react';
import './Profile.css';
import Profilepic from './images/Ellipse 10Profile.png';
import LogoUser from './images/user 1.png';
import LogoLock from './images/lock 1.png';
import LogoShoppingbag from './images/shopping-bag 1.png';
import LogoDollarsign from './images/dollar-sign 1.png';


function Profile() {
  return (
    <div className="profile-div">
        <div class="menu-profile">
            <img class="profile-pic" src={Profilepic} alt="profile-pic" ></img>
            <div class="profile-text">
            <p class="profile-name">David Al</p>
            <p class="profile-email">aldavid@gmail.com</p>
            </div>
        </div>
        <div class="menu-ubahprofil menu-profile-choice">
            <img class="menu-profile-logo" src={LogoUser} alt="logo-user" ></img>
            <p class="menu-profile-text">Ubah Profil</p>
        </div>
        <div class="menu-ubahpassword menu-profile-choice">
            <img class="menu-profile-logo" src={LogoLock} alt="logo-lock" ></img>
            <p class="menu-profile-text">Ubah Password</p>
        </div>
        <div class="menu-pembelian menu-profile-choice">
            <div class="selected-div"></div>
            <img class="menu-profile-logo" src={LogoShoppingbag} alt="logo-shoppingbag" ></img>
            <p class="menu-profile-text selected-text">Pembelian</p>
        </div>
        <div class="menu-pembayaran menu-profile-choice">
            <img class="menu-profile-logo" src={LogoDollarsign} alt="logo-dollarsign" ></img>
            <p class="menu-profile-text">Pembayaran</p>
        </div>
    </div>
  );
}

export default Profile;