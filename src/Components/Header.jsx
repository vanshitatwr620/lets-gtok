import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (<div id="main">
        <Navbar/>
        <div className="name">
            <h1><span>Feelings</span></h1>
            <h1>are assets</h1>
            <p className="details">A digital assets platform to share and trade feelings.</p>
            <a href="#" className="cv-btn">Join Now</a>
        </div>
    </div>);
}

export default Header;