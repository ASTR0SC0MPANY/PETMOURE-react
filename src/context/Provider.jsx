import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from './AppContext';

function Provider({ children }) {
    const [info, setInfo] = useState([]);
    const [cartItems,setCartItems] = useState([]);

    const contextValue = {
       info,
       setInfo,
       cartItems,
       setCartItems,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
}

Provider.propTypes = {
    children: PropTypes.any.isRequired,
};

export default Provider;