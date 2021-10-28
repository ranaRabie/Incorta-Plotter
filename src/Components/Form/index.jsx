import React, { useContext } from 'react';
import Context from '../../MyContext';

function Form () {
    const context = useContext(Context);
    return (
        <div>
            <form action="">
                <label>Dimension</label>
                <input type="text" value={context.currentDimension} />
                <label>Measure</label>
                <input type="text" value={context.currentMeasure} />
            </form>
        </div>
    );
    
      
};

export default Form;