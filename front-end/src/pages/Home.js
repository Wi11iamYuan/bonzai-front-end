import '../styles/Home.css';

import { TopNavbar } from "../components/TopNavbar";

import Image from 'react-bootstrap/Image';
import { useState, useEffect,useRef } from 'react';

const PageOne = () =>{
    return(<>
    <div className="home-page-one" >
            <div className='wave'></div>

            <div id="page-one-info">
                <p id="p1">Hello,</p>
                <p id="p2">Welcome to</p>
                <p id="p3">Bonzai</p>
                <p id="p4">Providing visual and statistical analysis<br></br>on common diseases</p>
            </div>
            <div id='page-one-img-div'>
                <Image src = '../images/logo_no_name.svg' id="page-one-img"></Image>
            </div>

            <div id="name">Dev&gt;WilliamYuan</div>
        </div>
    </>
        
    );
}

export const HomePage = () => {
    return(
        <>
        <TopNavbar />
        <PageOne />
        </>
    );
}