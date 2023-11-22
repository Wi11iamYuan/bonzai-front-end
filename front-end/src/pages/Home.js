import '../App.css';

import { TopNavbar } from "../components/TopNavbar";

import Image from 'react-bootstrap/Image';
import { useState, useEffect,useRef } from 'react';

const PageOne = () =>{
    const [startAnimation, setStartAnimation] = useState(false);
    return(<>
    <div className="home-page-one" >
            <div id="page-one-info">
                <p id="p1">Hello,</p>
                <p id="p2">Welcome to</p>
                <p id="p3">Bonzai</p>
            </div>
            <div>
                <Image src = '../logo_no_name.svg' id="page-one-img"></Image>
            </div>
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