import React from 'react';
import './App.scss';

function Button (props) {
    return (
        <div className="column">
            <button onClick={() => props.handler(props.value)} className="button is-primary">{props.value}</button>
        </div>
    );
}

export default Button;
