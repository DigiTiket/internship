import React from 'react';
import './Navbar.css';
import Searchbar from './Searchbar';
import LogoDigitiket from './images/logo-digitiket 1.png';
import LogoArrow from './images/Vectordrop-arrow.png';
import LogoAttraction from './images/VectorAttraction.png';
import LogoEvent from './images/calendar 1.png';
import LogoTour from './images/GroupTour.png';
import LogoVirtualTour from './images/GroupVirtualTour.png';
import LogoGabungMitra from './images/VectorGabungMitra.png';

function Navbar(){
    return(
        <div class="navbar">
            <div class="navbar-top">
            <img class="logo-digitiket" src={LogoDigitiket} alt="logo-digitiket" ></img>
            <Searchbar />
            <div class="button-hi">
            <p>Hai, Angelia!</p>
            <img class="logo-arrow" src={LogoArrow} alt="logo-arrow" ></img>
            </div>
            </div>
            <div class="navbar-menu">
                <div class="navbar-bottom">
                    <div class="menu-attraction">
                        <img class="logo-attraction" src={LogoAttraction} alt="logo-attraction" ></img>
                        <p class="menu-text">Attraction</p>
                    </div>
                    <div class="menu-event">
                        <img class="logo-event" src={LogoEvent} alt="logo-event" ></img>
                        <p class="menu-text">Event</p>
                    </div>
                    <div class="menu-tour">
                        <img class="logo-tour" src={LogoTour} alt="logo-tour" ></img>
                        <p class="menu-text">Tour</p>
                    </div>
                    <div class="menu-virtualtour">
                        <img class="logo-virtualtour" src={LogoVirtualTour} alt="logo-virtualtour" ></img>
                        <p class="menu-text">Virtual Tour</p>
                    </div>
                    <div class="button-gabungmitra">
                        <img class="logo-gabungmitra" src={LogoGabungMitra} alt="logo-gabung-mitra" ></img>
                        <p>Gabung Mitra</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;