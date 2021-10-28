import React, { useContext } from 'react';
import Context from '../../MyContext';

function Header () {
    const context = useContext(Context);
    return (
        <header className="main-header bg-primary text-center text-white py-2 m-0">
            <h1>Plotter</h1>
        </header>
    );
    
      
};

export default Header;