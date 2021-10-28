import React from 'react';
import Chart from '../Components/Chart';
import List from '../Components/List';
import Form from '../Components/Form';
import Header from '../Components/Header';

function Home () {
    return (
        <React.Fragment>
            <Header />
            <div className="row no-gutters">
                <div className="col-md-3">
                    <List />
                </div>
                <div className="col-md-9">
                    <Form />
                    <Chart />
                </div>
            </div>
        </React.Fragment>
    );
    
      
};
    
export default Home;