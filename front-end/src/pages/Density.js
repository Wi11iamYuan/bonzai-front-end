import 'bootstrap/dist/css/bootstrap.min.css';
import { TopNavbar } from "../components/TopNavbar";
import Plotly from 'plotly.js-dist-min';
import { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';

import '../styles/Density.css';

const DensePage = () => {
    return(<>
            <div id="stats"></div>
            <div id="custbox"></div>
            <img src='../../public/images/info.svg' id="info-icon"></img>
            {/* <div className='densityInf'>
                <div id="p1d">This is the Bonzai Density Map,</div>
                <div id="p2d">which displays the total pneumonia, influenza,</div>
                <div id="p3d">and COVID-19 deaths for each state from 2020-Now.</div>
            </div>
            <div>
                <img src='../../public/images/info.svg' id="info-icon"></img>
            </div> */}
            
        </> 
        );
}

//USE PLOTLY.UPDATE('DIV ID', NEWDATA)
export const DensityPage = () => {
    const data = [{
        type: "choroplethmapbox", geojson: "https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json", locations: [ "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY" ],
        z: [ 141, 140, 155, 147, 132, 146, 151, 137, 146, 136, 145, 141, 149, 151, 138, 158, 164, 141, 146, 145, 142, 150, 155, 160, 156, 161, 147, 164, 150, 152, 155, 167, 145, 146, 151, 154, 161, 145, 155, 150, 151, 162, 172, 169, 170, 151, 152, 173, 160, 176 ],
        autocolorscale: false, // Set autocolorscale to false
        colorscale: [
            [0, 'lightblue'],
            [0.5, 'blue'],
            [1, 'darkblue']
          ], // Specify the desired color scale
        colorbar: { y: 0, yanchor: "bottom", title: { text: "Deaths", side: "right" }} 
    }];
    
    const layout = {
        mapbox: { style: "dark", center: { lon: -110, lat: 50 }, zoom: 2.75 }, margin: { t: 0, b: 0, l: 0, r: 0 }, 
        geo: {
            showframe: false,
            showcoastlines: false,
            projection: {
                type: 'monocator'
            }
        },
        font: {
            family: "Arial",
            size: 16,
            color: "white"},
        paper_bgcolor: "#3C3C3C"
    };

    const config = {mapboxAccessToken: "pk.eyJ1IjoibW9sY2hpbm1pbGsiLCJhIjoiY2xrMjNqeDU1MGF0MTNrcTE4bzJlYXI5dyJ9.khh3ewLNPzOIAjhA2tO6iA"};

    const createChart = () =>{
        var plt = Plotly.newPlot("stats",
        data,
        layout,
        config
        );
    }
    useEffect(() => {
        createChart();
    }
    );

    return(
        <>
        <TopNavbar />
        <DensePage />
        </>
    );
}