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
    updateChart(Xaxis, Yaxis){
        this.setState({chartXAxisData: Xaxis});
        this.setState({chartYAxisData: Yaxis});
    }
    async getChartData(measure, dimension){
        const data = {
            "measures": measure,
            "dimension": dimension
        }
        const $this = this;
        await axios.post('https://plotter-task.herokuapp.com/data', data)
        .then(function (response) {
            const resData = response.data;

            let datasets =[];

            for(var i = 1; i < resData.length; i++){
                const $thisName = resData[i].name;
                const $thisValues = resData[i].values;
                datasets.push({
                    label: $thisName,
                    data: $thisValues,
                    fill: false,
                    borderColor: "rgba(75,192,192,1)"
                });
            }
            
            $this.updateChart(resData[0].values, datasets);
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
                    getItems: (type, name) => {
                        if(type === 'dimension'){
                            if(this.state.currentDimension !== ''){
                                alert('clear Dimension first');
                                return false;
                            }else{
                                if(name !== this.state.currentDimension){
                                    this.setState({ currentDimension: name});
                                } 
                            }
                        }else if(type === 'measure'){
                            if(this.state.currentMeasure.includes(name)){
                                alert('exist before');
                                return false;
                            }else{
                                this.state.currentMeasure.push(name);
                            }
                        }

                        if(this.state.currentDimension !== '' && this.state.currentMeasure.length !==0){
                            this.getChartData(this.state.currentMeasure, this.state.currentDimension);    
                        }
                        
                    },
                    
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Provider;