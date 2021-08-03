import React from "react";
import Chart from "./Chart/Chart";
//import ChartBar from "./chart/chartBar";
const ExpenceChart = (props) => {
    const chartDataPoints =
    [
    { lable: "Jan" ,value: 0 },
    { lable: "Feb" ,value: 0 },
    { lable: "Mar" ,value: 0 },
    { lable: "Apr" ,value: 0 },
    { lable: "May" ,value: 0 },
    { lable: "Jun" ,value: 0 },
    { lable: "Jul" ,value: 0 },
    { lable: "Aug" ,value: 0 },
    { lable: "Sep", value: 0 },
    { lable: "Oct", value: 0 },
    { lable: "Nov", value: 0 },
    { lable: "Dec", value: 0 }
        ]
    // here we getting the values as a month and adding that value to the amount that user enters in the form.it is togive the dataPoint value.
    for (const expense of props.expenses)
    {
        const expenseMonth = expense.date.getMonth(); // starting at 0 =>  jan is = 0 and feb = 1, etc.
        chartDataPoints[expenseMonth].value += expense.amount;
        }
    return <Chart dataPoints ={chartDataPoints} />
}

export default ExpenceChart;