import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    // in line 6 we are converting the dataPoint to objects to numbers 
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    //in this line 9 we are finding the maximum value in the dataPoints //
    //Math.max() objecr required numbers no array so we are converting array into numbers in line 7.
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className ="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar key={dataPoint.lable} maxValue={totalMaximum} value={dataPoint.value} lable={dataPoint.lable} />))}
        </div>
    );
}
 
export default Chart;