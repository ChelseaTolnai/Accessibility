import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <br/><br/>
        <label htmlFor="name">Name: </label>
        <input type="text" name="info" id="name" aria-required="true"/>
        
        <br/><br/>
        <label htmlFor="email">Email: </label>
        <input type="text" name="info" id="email" aria-required="true" />
        
        <br/><br/>
        <label htmlFor="birthday">Birthday: </label>
        <input type="text" name="info" id="birthday" aria-required="true"/>

        <br/><br/>
        <button aria-expanded="false" >Hit</button>
        <span data-focusable="true" tabIndex="0" role="button" aria-expanded="false">Hello</span>

      </form>
    </div>
  );
}

export default App;
