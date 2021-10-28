import React, { useContext } from 'react';
import Context from '../../MyContext';

function Form () {
    const context = useContext(Context);
    return (
        <div className="py-2 px-3 current-items-blk">
            <div className="row">
                <div className="col-md-6">
                    <label>Dimension</label>
                    <div className="d-flex">
                        <div className="current-items-box">
                            {context.currentDimension ? <div className="current-item">{context.currentDimension}</div> : ''}
                        </div>
                        <button type="button" className="btn btn-danger clear-btn" onClick={() => context.clearDimension()}>clear</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <label>Measure</label>
                    <div className="d-flex">
                        <div className="current-items-box">
                            {context.currentMeasure.map(measure => <div key={measure} className="current-item">{measure}</div>)}
                        </div>
                        <button type="button" className="btn btn-danger clear-btn" onClick={() => context.clearMeasures()}>clear</button>
                    </div>            
                </div>
            </div>
        </div>
    );
    
      
};

export default Form;