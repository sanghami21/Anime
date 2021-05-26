import React from 'react';
import ReactDOM from 'react-dom';
import "./index.html";
import {PieChart,Pie, Tooltip} from "recharts";



  const data = [
    { name : "Comedy", value : 30},
    { name : "thrill", value : 50},
    {name : "Slice of life", value : 20}
  ]
  const data1 = [
    { name : "Comedy", value : 20},
    { name : "thrill", value : 70},
    {name : "Slice of life", value : 10}
  ]
  const data2 = [
    { name : "Comedy", value : 10},
    { name : "thrill", value : 80},
    {name : "Slice of life", value : 10}
  ]
  const data3 = [
    { name : "Comedy", value : 20},
    { name : "thrill", value : 70},
    {name : "Slice of life", value : 10}
  ]
  const data4 = [
    { name : "Comedy", value : 30},
    { name : "thrill", value : 40},
    {name : "Slice of life", value : 30}
  ]

ReactDOM.render(
return(
  <div style = ({ textAlign : "center"})>
  <h1>How Anime made?</h1>
  <div className = "App">

  <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#eca6b0"
            label
          />
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data1}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#eca6b0"
            label
          />
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data2}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#eca6b0"
            label
          />
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data3}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="##eca6b0"
            label
          />
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data4}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#eca6b0"
            label
          />


          <Tooltip />
        </PieChart>
  </div>
) ,document.getElemenById("pie")
);
