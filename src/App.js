import React from 'react';
// import stylesheet
import './App.scss';

// import main calculator component
import Calculator from './Calculator';

// The App component simply renders the Calculator component
// as it is good practice to never put all your code into the entrypoint
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Calculator/>
      </header>
    </div>
  );
}

export default App;
