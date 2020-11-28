import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfileCard/>
      </header>
    </div>
  );
}

export default App;
