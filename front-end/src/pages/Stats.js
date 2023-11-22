import { TopNavbar } from "../components/TopNavbar";
import Plotly from 'plotly.js-dist-min';
import { useState, useEffect } from 'react';

 
export const StatsPage = () => {
    const createChart = () =>{
        Plotly.newPlot("stats", /* JSON object */ {
            "data": [{ 
                "y": [1, 2, 3],
                "x": ["e", "b", "d"],
                "type" : "bar"
            }],
            "layout": { "width": 600, "height": 400},
        })
    }
    useEffect(() => {
        createChart();
    }
    );
    return(
        <>
        <TopNavbar />

        <div id="stats"></div>
        </>
    );
}