import React, {useState} from 'react';
import './App.scss';

function Button (props) {
    const [val, setVal] = useState(props.value);

    return (
        <div className="column">
            <button onClick={() => props.handler(props.value)} className="button is-primary">{props.value}</button>
        </div>
    );
}

export default Button;
