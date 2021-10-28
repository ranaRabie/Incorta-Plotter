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
      <div className="chart-wrapper px-3 pt-2"> 
      {context.currentDimension !== '' || context.currentMeasure !== [] ? (
        <Line data={{
          labels: context.chartXAxisData,
          datasets: context.chartYAxisData,
        }} options={options} />
      ) 
      : <div className="text-danger text-center">Please Select Dimension and Measure to see chart</div>}
      
      </div>
    );

  
};

export default Chart;