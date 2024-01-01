import { TopNavbar } from "../components/TopNavbar";
import Plotly from 'plotly.js-dist-min';
import { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


import '../styles/Stats.css';

import { getStats } from '../services/api.service';

const formattedData = (x, y) => {
    let data = [{
        x: x,
        y: y,
        type: 'bar'
    }];
    return data;
}

const formattedLayout = (title, type) => {
    let layout = {
        title: {
            text: title,
            font: {
                family: 'Arial',
                size: 15,
                color: '#c3c3c3'
            }
        },
        plot_bgcolor: '#6f769b',  // Background color behind the plot
        paper_bgcolor: '#3f4358',
        font: {
            family: 'Arial',
            size: 13,
            color: '#c3c3c3'
        },
        yaxis: {
            title: {
                text: 'Deaths',
                font: {
                    family: 'Arial',
                    size: 13,
                    color: '#c3c3c3'
                }
            }
        },
        xaxis: {
            title: {
                text: type,
                font: {
                    family: 'Arial',
                    size: 13,
                    color: '#c3c3c3'
                }
            }
        }
    };
    return layout;
}


export const StatsPage = () => {

    const [isAnimated, setIsAnimated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        if (selectedYearItems.length == 0 || selectedDisItems.length == 0 || selectedAgeItems.length == 0 || selectedStateItems == "Select State") {
            setIsAnimated(true);
            setTimeout(() => {
                setIsAnimated(false);
            }, 500);
            return;
        }

        try {
            setIsLoading(true);

            let res = await getStats(selectedDisItems, selectedYearItems, selectedAgeItems, selectedStateItems);
            let data = await res.json();

            let title1 = "State vs. Deaths";

            Plotly.react("stats-graph1", formattedData(data["x_state"], data["y_state"]), formattedLayout(title1, "States"));

            let title2 = "Age Group vs. Deaths";

            Plotly.react("stats-graph2", formattedData(data["x_age"], data["y_age"]), formattedLayout(title2, "Age Groups"));

            let title3 = "Year vs. Deaths";

            Plotly.react("stats-graph3", formattedData(data["x_year"], data["y_year"]), formattedLayout(title3, "Years"));

            let title4 = "Disease vs. Deaths";

            Plotly.react("stats-graph4", formattedData(data["x_dis"], data["y_dis"]), formattedLayout(title4, "Diseases"));

            setIsLoading(false);
        } catch (e) {

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

    const [selectedStateItems, setSelectedStateItems] = useState("Select State");

    const toggleStateSelection = (item) => {
        setSelectedStateItems(item);
    };

    const state = [
        { id: 'US', name: 'All States' },
        { id: 'AL', name: 'Alabama' },
        { id: 'AK', name: 'Alaska' },
        { id: 'AZ', name: 'Arizona' },
        { id: 'AR', name: 'Arkansas' },
        { id: 'CA', name: 'California' },
        { id: 'CO', name: 'Colorado' },
        { id: 'CT', name: 'Connecticut' },
        { id: 'DE', name: 'Delaware' },
        { id: 'FL', name: 'Florida' },
        { id: 'GA', name: 'Georgia' },
        { id: 'HI', name: 'Hawaii' },
        { id: 'ID', name: 'Idaho' },
        { id: 'IL', name: 'Illinois' },
        { id: 'IN', name: 'Indiana' },
        { id: 'IA', name: 'Iowa' },
        { id: 'KS', name: 'Kansas' },
        { id: 'KY', name: 'Kentucky' },
        { id: 'LA', name: 'Louisiana' },
        { id: 'ME', name: 'Maine' },
        { id: 'MD', name: 'Maryland' },
        { id: 'MA', name: 'Massachusetts' },
        { id: 'MI', name: 'Michigan' },
        { id: 'MN', name: 'Minnesota' },
        { id: 'MS', name: 'Mississippi' },
        { id: 'MO', name: 'Missouri' },
        { id: 'MT', name: 'Montana' },
        { id: 'NE', name: 'Nebraska' },
        { id: 'NV', name: 'Nevada' },
        { id: 'NH', name: 'New Hampshire' },
        { id: 'NJ', name: 'New Jersey' },
        { id: 'NM', name: 'New Mexico' },
        { id: 'NY', name: 'New York' },
        { id: 'NC', name: 'North Carolina' },
        { id: 'ND', name: 'North Dakota' },
        { id: 'OH', name: 'Ohio' },
        { id: 'OK', name: 'Oklahoma' },
        { id: 'OR', name: 'Oregon' },
        { id: 'PA', name: 'Pennsylvania' },
        { id: 'RI', name: 'Rhode Island' },
        { id: 'SC', name: 'South Carolina' },
        { id: 'SD', name: 'South Dakota' },
        { id: 'TN', name: 'Tennessee' },
        { id: 'TX', name: 'Texas' },
        { id: 'UT', name: 'Utah' },
        { id: 'VT', name: 'Vermont' },
        { id: 'VA', name: 'Virginia' },
        { id: 'WA', name: 'Washington' },
        { id: 'WV', name: 'West Virginia' },
        { id: 'WI', name: 'Wisconsin' },
        { id: 'WY', name: 'Wyoming' }
    ];

    const createChart = () => {
        let title1 = "State vs. Deaths";

        let title2 = "Age Group vs. Deaths";

        let title3 = "Year vs. Deaths";

        let title4 = "Disease vs. Deaths";

        Plotly.newPlot("stats-graph1", formattedData(0, 0), formattedLayout(title1, "States"));


        Plotly.newPlot("stats-graph2", formattedData(0, 0), formattedLayout(title2, "Age Groups"));


        Plotly.newPlot("stats-graph3", formattedData(0, 0), formattedLayout(title3, "Years"));


        Plotly.newPlot("stats-graph4", formattedData(0, 0), formattedLayout(title4, "Diseases"));
    }

    useEffect(() => {
        createChart();
    },[]);


    return (
        <>
            <TopNavbar />

            <div id="stats-back"></div>

            <div id="stats-custbox">
                <p id="stats-cust-info">The graphs display deaths caused by common diseases in the United States. <br></br><br></br>Change parameters and save to customize the graphs. Double click a graph to reset its position.</p>

                <div className="stats-cust-title">State</div>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-tit">
                        {selectedStateItems}
                    </Dropdown.Toggle>
                    <Dropdown.Menu id="dropdown-menu">
                        {state.map((state) => (
                            <Dropdown.Item
                                key={state.id}
                                active={selectedStateItems.includes(state.name)}
                                onClick={() => toggleStateSelection(state.name)}
                                className="stats-select"
                            >
                                {state.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>



                <div className="stats-cust-title">Disease</div>
                <ListGroup horizontal >
                    {disease.map((disease) => (
                        <ListGroup.Item
                            key={disease.id}
                            active={selectedDisItems.includes(disease.name)}
                            onClick={() => toggleDisSelection(disease.name)}
                            className="stats-select"
                        >
                            {disease.id}
                        </ListGroup.Item>
                    ))}
                </ListGroup>

                <div className="stats-cust-title">Year</div>
                <ListGroup horizontal >
                    {year.map((year) => (
                        <ListGroup.Item
                            key={year.id}
                            active={selectedYearItems.includes(year.name)}
                            onClick={() => toggleYearSelection(year.name)}
                            className="stats-select"
                        >
                            {year.id}
                        </ListGroup.Item>
                    ))}
                </ListGroup>

                <div className="stats-cust-title">Age</div>
                <ListGroup horizontal >
                    {age.map((age) => (
                        <ListGroup.Item
                            key={age.id}
                            active={selectedAgeItems.includes(age.name)}
                            onClick={() => toggleAgeSelection(age.name)}
                            className="stats-select"
                        >
                            {age.id}
                        </ListGroup.Item>
                    ))}
                </ListGroup>


                <Button variant='primary' type="submit" className='stats-save' onClick={onSubmit} id={isAnimated ? "shake" : "notshake"}>Save</Button>

                <div className={isLoading ? "stats-isloader" : "stats-noloader"}></div>

            </div>

            <div id="stats-graphs">
                <div id="stats-graph1"></div>
                <div id="stats-graph2"></div>
                <div id="stats-graph3"></div>
                <div id="stats-graph4"></div>
            </div>

        </>
    );
}