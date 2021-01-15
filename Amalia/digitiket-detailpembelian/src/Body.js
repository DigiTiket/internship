import React from 'react';
import './Body.css';
import Profile from './Profile';
import Detail from './Detail';

function Body() {
  return (
    
    <div class="body" >
        <div class="body-container">
            <Profile />
            <Detail />
        </div>
    </div>
  );
}

export default Body;