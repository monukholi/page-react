import { useState } from 'react';
import './App.css';
import Navbar from './componets/Navbar';
import Textform from './componets/Textform';
// import About from './componets/About';

function App() {
  const[mode, setMode] = useState('light'); // dark mode enabled yes or not
  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = 'black';
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
    }
};


  return (
  <>
    {/* <Navbar title="iCoder" aboutText="About Us"/> */}
    <Navbar title="MonuCoder" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <Textform heading="Enter the Text below" mode={mode}/>
    {/* <About/> */}
    </div>
  </>
  );
}

export default App;
