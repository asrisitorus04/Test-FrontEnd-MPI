import React from "react";
import { useRef } from 'react';
import { Bar, getDatasetAtEvent } from 'react-chartjs-2';

const Barchart = () => {
  const chartRef = useRef();
  const onClick = (event) => {
    console.log(getDatasetAtEvent(chartRef.current, event));
  };
  return <Bar ref={chartRef} data={data} onClick={onClick} />;
};

export default Barchart;
