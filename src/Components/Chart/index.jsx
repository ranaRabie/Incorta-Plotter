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
        datasets: [
          {
            label: context.currentMeasure,
            data: context.chartYAxisData,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      }} options={options} />
      </div>
    );

  
};

export default Chart;