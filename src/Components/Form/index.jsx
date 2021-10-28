import React, { useContext } from 'react';

function Form () {
    return (
        <div>
            <form action="">
                <label>Dimension</label>
                <input type="text" value='dimension' />
                <label>Measure</label>
                <input type="text" value='measure' />
            </form>
        </div>
    );
    
      
};

export default Form;