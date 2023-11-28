import React from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Loading.css';

function Loading() {
    return <FontAwesomeIcon className= "loading" icon={faSpinner} />;
}

export default Loading;
