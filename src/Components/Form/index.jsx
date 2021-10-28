import React, { useContext } from 'react';
import Context from '../../MyContext';

function Form () {
    const context = useContext(Context);
    return (
        <div>
            <form action="">
                <label>Dimension</label>
                <input type="text" value={context.currentDimension} onChange={() => console.log('change')} />
                <button type="button" onClick={() => context.clearDimension()}>clear</button>
                <label>Measure</label>
                <input type="text" value={context.currentMeasure}  onChange={() => console.log('change')} />
                <button type="button" onClick={() => context.clearMeasures()}>clear</button>
            </form>
        </div>
    );
    
      
};

export default Form;