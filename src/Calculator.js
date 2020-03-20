import React, {useState} from 'react';
import './App.scss';

import Button from './Button';

function Calculator () {
	const [result, setResult] = useState(0);
	const [history, setHistory] = useState('');
	const [opClicked, setClicked] = useState(false);

	function initializeButtons () {
		const arr = [];
		for (let i = 0; i <= 9; i++) {
			arr.push(
				<Button handler={numHandler} value={i}/>
			);
		}
		return arr;
	}

	function numHandler (value) {
		if (result === 0 || opClicked) {
			setResult(value);
			setClicked(false);
		}
		else {
			setResult(result * 10 + value);
		}
		setHistory(history + value);
	}

	function isOp (char) {
		switch (char) {
			case '+':
				return true;
			case '-':
				return true;
			case '*':
				return true;
			case '/':
				return true;
			case '%':
				return true;
			default:
				return false;

		}
	}

	function opHandler (op) {
		if (history === '') return;
		switch (op) {
			case '+':
				if (!isOp(history[history.length - 2])) setHistory(history + ' + ');
				else {
					setHistory(history.slice(0, history.length - 2) + '+ ');
					break;
				}
				setClicked(true);
				setResult(eval(history));
				break;
			case '-':
				if (!isOp(history[history.length - 2])) setHistory(history + ' - ');
				else {
					setHistory(history.slice(0, history.length - 2) + '- ');
					break;
				}
				setClicked(true);
				setResult(eval(history));
				break;
			case '*':
				if (!isOp(history[history.length - 2])) setHistory(history + ' * ');
				else {
					setHistory(history.slice(0, history.length - 2) + '* ');
					break;
				}
				setClicked(true);
				setResult(eval(history));
				break;
			case '/':
				if (!isOp(history[history.length - 2])) setHistory(history + ' / ');
				else {
					setHistory(history.slice(0, history.length - 2) + '/ ');
					break;
				}
				setClicked(true);
				setResult(eval(history));
				break;
			case '%':
				if (!isOp(history[history.length - 2])) setHistory(history + ' % ');
				else {
					setHistory(history.slice(0, history.length - 2) + '% ');
					break;
				}
				setClicked(true);
				setResult(eval(history));
				break;
			case '=':
				setClicked(true);
				setResult(eval(history));
				setHistory('');
				break;
			case 'C':
				setHistory('');
				setResult(0);
				break;
			case 'B':
				if (!isOp(history[history.length - 1])) {
					setHistory(history.slice(0, history.length - 1));
					setResult(Math.floor(result / 10));
				}
				break;
			case 'CE':
				if (!isOp(history[history.length - 1])) {
					setHistory(history.slice(0, history.length - result.toString().length));
				}
				setResult(0);
				break;
			default:
				setClicked(true);
				break;
		}
	}

    return (
        <div className="section has-background-black">
            <div className="hero is-fullheight">
		        <div className="hero-body">
			        <div className="container">
				        <div className="columns is-centered">
                            <div className="column is-half-desktop is-three-quarters-tablet is-full-mobile">
                                    <div className="container">
										<div className="field">
											<div className="control">
												<label className="label">{history}</label>
											</div>
										</div>
										<div className="field">
											<div className="control">
												<input readOnly className="input" type="text" value={result} />
											</div>
										</div>
										<div className="field">
											<div className="control">
												<div className="columns is-multiline is-centered">
                                            		{initializeButtons()}
													<Button handler={opHandler} value="+" />
													<Button handler={opHandler} value="-" />
													<Button handler={opHandler} value="*" />
													<Button handler={opHandler} value="/" />
													<Button handler={opHandler} value="%" />
													<Button handler={opHandler} value="=" />
													<Button handler={opHandler} value="C" />
													<Button handler={opHandler} value="CE" />
													<Button handler={opHandler} value="B" />
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