import '../App.css';

import { TopNavbar } from "../components/TopNavbar";
import { Parallax } from 'react-parallax';

import Image from 'react-bootstrap/Image';

const PageOne = () =>{
    return(
        <div className="home-page-one" strength={800}>
            <div id="page-one-info">
                Hello, <br></br>
                Welcome to Bonzai
            </div>
            <div>
                <Image src = '../logo_no_name.svg' id="page-one-img"></Image>
            </div>
        </div>
    );
}

const PageTwo = () =>{
    return(
        <div className="home-page-two" strength={800}>
            <div id="page-two-info">
                hey hey hey
            </div>
        </div>
    );
}

export const HomePage = () => {
    return(
        <>
        <TopNavbar />
        <PageOne />
        <div className = "page-divider"></div>
        <PageTwo />
        </>
    );
}