import React, { Component } from 'react';
import Context from './MyContext';
import axios from 'axios';
class Provider extends Component {
    state = {
        currentDimension: '',
        currentMeasure: [],
        chartXAxisData: [],
        chartYAxisData: [],
    };
    // Update Chart with New Data
    updateChart(Xaxis, Yaxis){
        this.setState({chartXAxisData: Xaxis});
        this.setState({chartYAxisData: Yaxis});
    }
    // Fetch to get Chart Data with current Measures and Dimension
    async getChartData(measure, dimension){
        const data = {
            "measures": measure,
            "dimension": dimension
        }
        const $this = this;
        await axios.post('https://plotter-task.herokuapp.com/data', data)
        .then(function (response) {
            const resData = response.data; // Response Data

            let datasets =[];
            // Loop over Responsove Data Without 0 Index To get Datasets of multiple Measures
            for(var i = 1; i < resData.length; i++){
                const $thisName = resData[i].name; // Measure Name
                const $thisValues = resData[i].values;  // Measure Value
                // Push to Datasets Array
                datasets.push({
                    label: $thisName,
                    data: $thisValues,
                    fill: false,
                    borderColor: "rgba(75,192,192,1)"
                });
            }
            
            $this.updateChart(resData[0].values, datasets); // Update Chart with New Data
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    render() {
        return (
            <Context.Provider
                value={{
                    currentMeasure: this.state.currentMeasure,
                    currentDimension: this.state.currentDimension,
                    chartXAxisData: this.state.chartXAxisData,
                    chartYAxisData: this.state.chartYAxisData,
                    // Get List Items of Measures and Dimensions
                    getItems: (type, name) => {
                        if(type === 'dimension'){
                            if(this.state.currentDimension !== ''){ // If Dimesion already have a value
                                alert('clear Dimension first');
                                return false;
                            }else{
                                this.setState({ currentDimension: name});
                            }
                        }else if(type === 'measure'){
                            if(this.state.currentMeasure.includes(name)){ // If Measure alredy exists in Measures Box
                                alert('exist before');
                                return false;
                            }else{
                                const $measures = this.state.currentMeasure; // Cloning Measures
                                $measures.push(name); // Push New Measure
                                this.setState({currentMeasure: $measures}); // Update State
                                // this.state.currentMeasure.push(name);
                            }
                        }
                        console.log(this.state.currentDimension);
                        console.log(this.state.currentMeasure);
                        if(this.state.currentDimension !== '' && this.state.currentMeasure.length !== 0){ // If Dimension and Measure/Measures exist 
                            console.log('here');
                            // Get New Chart Data
                            this.getChartData(this.state.currentMeasure, this.state.currentDimension);    
                        }
                        
                    },
                    // Clear Dimension
                    clearDimension: () => {
                        this.setState({currentDimension: ''});
                        this.setState({chartXAxisData: []});
                        this.setState({chartYAxisData: []});
                    },
                    // Clear Measures
                    clearMeasures: () => {
                        this.setState({currentMeasure: []});
                        this.setState({chartXAxisData: []});
                        this.setState({chartYAxisData: []});
                    }
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Provider;