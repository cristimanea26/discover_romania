import React from 'react';
import Section01 from './components/section_01/Section01';
import Section02 from './components/section_02/Section02';
import Section03 from './components/section_03/Section03';
import './App.css';

function App() {
  return (
    <div className="App">
      <Section01 />
      <Section02 />
      <Section03 />
    </div>  
  );
}

export default App;