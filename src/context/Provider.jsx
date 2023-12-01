import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from './AppContext';

function Provider({ children }) {
    const [info, setInfo] = useState([]);
    const [cartItem,setCartItem] = useState([]);
    const [loading,setLoading] = useState(true)

    const contextValue = {
       info,
       setInfo,
       loading,
       setLoading,
       cartItem,
       setCartItem,
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