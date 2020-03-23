import React, {useState} from 'react';
import './App.scss';

// import button component
import Button from './Button';

function Calculator () {
	// initialize hooks to be used for state management
	const [result, setResult] = useState(0);
	const [history, setHistory] = useState('');
	const [opClicked, setClicked] = useState(false);

	// this loop pushes JSX inside an array to be rendered in the DOM
	function initializeButtons () {
		const arr = [];
		for (let i = 0; i <= 9; i++) {
			arr.push(
				// The numHandler function below is passed as a handler prop
				// and the array index is passed as the value prop
				// this means we will have buttons with values between 0 to 9 pushed into the array
				<Button handler={numHandler} value={i}/>
			);
		}
		return arr;
	}
	// a simple handler function that handles any input whenever a number is pressed
	function numHandler (value) {
		// if the number is first button to be pressed or an operator button has been pressed
		if (result === 0 || opClicked) {
			setResult(value);
			setClicked(false);
		}
		else {
			setResult(result * 10 + value);
		}
		setHistory(history + value);
	}

	// a simple function that checks if input character is an operator
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

	// a handler function that handles operator input
	function opHandler (op) {
		// do not allow operators to be used without any numbers
		if (history === '') return;
		switch (op) {
			case '+':
				// check if an operator is already in place, if not, add an operator
				if (!isOp(history[history.length - 2])) setHistory(history + ' + ');
				else {
					// if an operator is in place, replace it
					setHistory(history.slice(0, history.length - 2) + '+ ');
					break;
				}
				// set operator clicked = true
				setClicked(true);
				// eval inputs javascript code or evaluates a string formula. this evalues the history string and sets the value of result
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
				// clear the history so that new operations can begin instantly
				setClicked(true);
				setResult(eval(history));
				setHistory('');
				break;
			case 'C':
				// clears the history and the current calculator result
				setHistory('');
				setResult(0);
				break;
			// simply splices any non-operator numbers
			case 'Back':
				if (!isOp(history[history.length - 1])) {
					setHistory(history.slice(0, history.length - 1));
					setResult(Math.floor(result / 10));
				}
				break;
			// this will remove the current result by setting it to 0 and splicing the history
			// by the length of the current result so if the current result is 1234 then 4 characters
			// are spliced from history
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

	// bulma.io styling and using the JSX function above to initialize all the numbers through
	// a loop rather than manually making every button from 0 to 9. We also pass handlers and 
	// props to the button component
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
													<Button handler={opHandler} value="Back" />
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