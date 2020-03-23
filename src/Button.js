import React from 'react';
import './App.scss';

// Simply return a bulma column with the handler prop passed to component as the onClick binding
// and the value prop as the value of button.
function Button (props) {
    return (
        <div className="column">
            <button onClick={() => props.handler(props.value)} className="button is-primary">{props.value}</button>
        </div>
    );
}

export default Button;
