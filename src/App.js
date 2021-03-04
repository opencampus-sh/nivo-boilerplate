import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
// we import from the json file the data
import data from './data.json'

//import { Chart } from './components'
import { BarChart } from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">Example ResponsiveBar</h1>
          <div class="chart">
            <BarChart data={data}/>
          </div>
          <p className="text">Some text below the chart</p>
        </header>
      </div>
    );
  }
}

export default App;
