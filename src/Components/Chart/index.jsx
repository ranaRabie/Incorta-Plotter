import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import Context from '../../MyContext';

const Chart = () => {
    const context = useContext(Context);

    const options = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

    return(
      <div>
      <Line data={{
        labels: context.chartXAxisData,
        datasets: context.chartYAxisData,
      }} options={options} />
      </div>
    );

  
};

export default Chart;