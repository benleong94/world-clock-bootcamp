import React from "react";
import logo from "./logo.png";
import "./App.css";
import Counter from "./Counter.jsx"
import Clock from "./Clock.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />        
          <Counter/>
          <Clock/>
        </header>
      </div>
    );
  }
}

export default App;