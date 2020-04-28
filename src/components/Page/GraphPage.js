
// details from these websites. 
//https://recharts.org/en-US/examples/AreaResponsiveContainer
//https://reacttraining.com/blog/react-router-v5-1/

import React, { useState, useEffect } from "react";
import {
    useParams,
    useHistory
  } from "react-router-dom";

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const CityGraph = () => {

    const history=useHistory();
    const backButtonFucntion = ()=> history.goBack();

    const {cityId} =useParams()
    const [graph, setGraph] = useState({});
    const [isLoading, setLoading]= useState(false);
    const [hasError, setError] = useState(false);


    const getGraph = () => {
        setLoading(true);
        fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setLoading(false);
            setGraph(data);
        })
        .catch(err => {
            setLoading(false);
            setError(true);
        })

    };

    useEffect(getGraph, [])

    if (isLoading) return <p>Loading ...</p>;
    if (hasError) return <p>Something went Wrong</p>;

    return (
        <div className="cityWeatherDetails">
            

            <ResponsiveContainer  width="75%" height={250}>
                <AreaChart
                    data={graph.list}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="dt_txt" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="main.temp" name='temperature' stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>

            <button className = '' onClick={backButtonFucntion}> Back </button>


        </div>
    )

}

export default CityGraph;
