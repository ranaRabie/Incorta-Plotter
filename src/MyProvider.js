import React, { Component } from 'react';
import Context from './MyContext';
import axios from 'axios';

class Provider extends Component {
    state = {
        currentDimension: '',
        currentMeasure: [],
    };
    getChartData(measure, dimension){
        const data = {
            "measures": measure,
            "dimension": dimension
        }
        console.log(data);
        const $this = this;
        axios.post('https://plotter-task.herokuapp.com/data', data)
        .then(function (response) {
            console.log(response.data);
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
                            }else{
                                if(name !== this.state.currentDimension){
                                    this.setState({ currentDimension: name});
                                } 
                            }
                        }else if(type === 'measure'){
                            if(this.state.currentMeasure.includes(name)){
                                alert('exist before');
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