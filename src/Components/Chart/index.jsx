import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import Context from '../../MyContext';

const Chart = () => {
    const context = useContext(Context);

    const options = {
      plugins: {
        title: {
            display: true,
            text: `${context.currentDimension} Chart`,
            position: 'bottom',
            padding: {
                top: 20
            },
            font:{
              size: 20,
            }
        }
      }
    };

    
    return(
      <div className="chart-wrapper px-3 pt-2"> 
      {context.currentDimension !== '' && context.currentMeasure.length !== 0 ? (
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