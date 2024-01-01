import 'bootstrap/dist/css/bootstrap.min.css';
import { TopNavbar } from "../components/TopNavbar";
import Plotly from 'plotly.js-dist-min';
import { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import { getStats } from '../services/api.service';



import '../styles/Density.css';

const formattedData = (z_data, title) => {
    const data = [{
        type: "choroplethmapbox", geojson: "https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json", locations: [ "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY" ],
        z: z_data,
        autocolorscale: false, // Set autocolorscale to false
        colorscale: [
            [0, 'lightblue'],
            [0.5, 'blue'],
            [1, 'darkblue']
          ], // Specify the desired color scale
        colorbar: { y: 0, yanchor: "bottom", title: { text: title, side: "right" }} 
    }];

    return data;
}

const layout = {
    mapbox: { style: "dark", center: { lon: -100, lat: 40 }, zoom: 3 }, margin: { t: 0, b: 0, l: 0, r: 0 }, 
    geo: {
        showframe: false,
        showcoastlines: false,
        projection: {
            type: 'monocator'
        }
    },
    font: {
        family: "Arial",
        size: 13,
        color: "#c3c3c3"},
    paper_bgcolor: "#22282e",
    textfont: {
        color: "#c3c3c3" // Set the desired color for the text
    }
};

const config = {mapboxAccessToken: "pk.eyJ1IjoibW9sY2hpbm1pbGsiLCJhIjoiY2xrMjNqeDU1MGF0MTNrcTE4bzJlYXI5dyJ9.khh3ewLNPzOIAjhA2tO6iA"};


const DensePage = () => {
    const [open, setOpen] = useState(true);

    const toggleOpen = () => {
        setOpen(!open);
    }

    const [isAnimated, setIsAnimated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        if(selectedYearItems.length == 0 || selectedDisItems.length == 0 || selectedAgeItems.length == 0){
            setIsAnimated(true);
          setTimeout(() => {
            setIsAnimated(false);
          }, 500);
            return;
        }

        try{
            setIsLoading(true);
            let res = await getStats(selectedDisItems, selectedYearItems, selectedAgeItems, "All States");
            let data = await res.json();

            let z = data["y_state"];

            // let title = selectedDisItems[0] + " Deaths in " + selectedYearItems[0] + " by Age Group";
            let years = selectedYearItems.join(", ");
            let diseases = selectedDisItems.join(", ");
            diseases = diseases.replace(/covid_19_deaths/g, "Covid-19");
            diseases = diseases.replace(/pneumonia_deaths/g, "Pneumonia");
            diseases = diseases.replace(/influenza_deaths/g, "Influenza");

            let ages = selectedAgeItems.join(", ");
            ages = ages.replace(/18-64 years/g, "18-64");
            ages = ages.replace(/65 years and over/g, "65+");

            let title = diseases + " Deaths | " + years + " | Ages " + ages;

            Plotly.react("stats", formattedData(z, title), layout, config);
            
            setIsLoading(false);
        }catch(e){

        }
    }

    const [selectedYearItems, setSelectedYearItems] = useState([]);

    const toggleYearSelection = (item) => {
        if (selectedYearItems.includes(item)) {
        setSelectedYearItems(selectedYearItems.filter((selectedYearItem) => selectedYearItem !== item));
        } else {
        setSelectedYearItems([...selectedYearItems, item]);
        }
    };

    const year = [
        { id: '2020', name: '2020' },
        { id: '2021', name: '2021' },
        { id: '2022', name: '2022' },
        { id: '2023', name: '2023' },
        { id: '2024', name: '2024' },
    ];

    const [selectedDisItems, setSelectedDisItems] = useState([]);

    const toggleDisSelection = (item) => {
        if (selectedDisItems.includes(item)) {
        setSelectedDisItems(selectedDisItems.filter((selectedDisItem) => selectedDisItem !== item));
        } else {
        setSelectedDisItems([...selectedDisItems, item]);
        }
    };

    const disease = [
        { id: 'Covid-19', name: 'covid_19_deaths' },
        { id: 'Pneumonia', name: 'pneumonia_deaths' },
        { id: 'Influenza', name: 'influenza_deaths' },
    ];

    const [selectedAgeItems, setSelectedAgeItems] = useState([]);

    const toggleAgeSelection = (item) => {
        if (selectedAgeItems.includes(item)) {
        setSelectedAgeItems(selectedAgeItems.filter((selectedAgeItem) => selectedAgeItem !== item));
        } else {
        setSelectedAgeItems([...selectedAgeItems, item]);
        }
    };

    const age = [
        { id: '18-64', name: '18-64 years' },
        { id: '65+', name: '65 years and over' },
    ];

    //MAKE LIKE A PROCESSING OR LOADING SCREEN TYPE SHIT

    return(<>
            <div id="stats"></div>

            <div id="custbox" className={open ? "custbox-open": "custbox-close"} onSubmit={onSubmit}>

            <p id="cust-info">This interactive map displays deaths caused by common diseases in the United States. <br></br><br></br>Change parameters and save to customize the map. Double click the map to reset position. Click the question mark to toggle visibility.</p>

            <div className ="cust-title">Disease</div>
            <ListGroup horizontal >
                {disease.map((disease) => (
                    <ListGroup.Item
                        key={disease.id}
                        active={selectedDisItems.includes(disease.name)}
                        onClick={() => toggleDisSelection(disease.name)}
                        className = "density-select"
                    >
                        {disease.id}
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <div className ="cust-title">Year</div>
            <ListGroup horizontal >
                {year.map((year) => (
                    <ListGroup.Item
                        key={year.id}
                        active={selectedYearItems.includes(year.name)}
                        onClick={() => toggleYearSelection(year.name)}
                        className = "density-select"
                    >
                        {year.id}
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <div className ="cust-title">Age</div>
            <ListGroup horizontal >
                {age.map((age) => (
                    <ListGroup.Item
                        key={age.id}
                        active={selectedAgeItems.includes(age.name)}
                        onClick={() => toggleAgeSelection(age.name)}
                        className = "density-select"
                    >
                        {age.id}
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <Button variant = 'primary' type="submit" className='density-save' onClick={onSubmit} id = {isAnimated ? "shake": "notshake"}>Save</Button>
            <div className={isLoading ? "isloader" : "noloader"}></div>
            </div>

            <img src='../images/help.svg' id="info-icon" onClick={toggleOpen}></img>
        </> 
        );
}

//USE PLOTLY.UPDATE('DIV ID', NEWDATA)
export const DensityPage = () => {

    const createChart = () =>{
        Plotly.newPlot("stats",
        formattedData([ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 ]
            ,"Deaths"),
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