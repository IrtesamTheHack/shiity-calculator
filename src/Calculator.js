import React, {useState} from 'react';
import './App.scss';

import Button from './Button';

function Calculator () {
	const [result, setResult] = useState(0);

	function initializeButtons () {
		const arr = [];
		for (let i = 0; i <= 9; i++) {
			arr.push(
				<Button handler={inputHandler} value={i}/>
			);
		}
		return arr;
	}

	function inputHandler(value) {
		setResult(value);
	}

    return (
        <div className="section has-background-black">
            <div className="hero is-fullheight">
		        <div className="hero-body">
			        <div className="container">
				        <div className="columns is-centered">
                            <div className="column is-half-desktop is-three-quarters-tablet">
                                    <div className="container">
										<div className="field">
											<div className="control">
												<input readonly className="input" type="text" value={result} />
											</div>
										</div>
										<div className="field">
											<div className="control">
												<div className="columns is-multiline is-centered">
                                            		{initializeButtons()}
                                        		</div>
											</div>
										</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;