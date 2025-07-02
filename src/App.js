
import React from 'react';
import logo from './logo.svg';
import './index.css';
import { Button } from 'antd';


const App = () => (
  <div className="App min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="text-lg font-semibold text-blue-700">
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link text-blue-500 underline"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <div className="mt-6">
        <Button type="primary">Ant Design Button</Button>
      </div>
    </header>
  </div>
);

export default App;
