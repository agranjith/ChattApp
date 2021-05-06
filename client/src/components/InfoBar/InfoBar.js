import React from 'react';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';
import logo from '../../icons/logo.ico';
import './InfoBar.css';

const InfoBar=({room})=>(
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online"/>
            <h3>{room}</h3>
        </div>
        <div className="centerInnerContainer">
            <img className="logo" src={logo} alt="logo"/>
            <h3 className="appName">chAt</h3>
        </div>
        <div className="rightInnerContainer">
            <a href='/'><img src={closeIcon} alt="close"/></a>
        </div>
    </div>
)

export default InfoBar;