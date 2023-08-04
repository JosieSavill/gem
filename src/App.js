// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import Home from './components/Home';
import About from './components/About';
// import Contact from './components/Contact';
// import NewPortfolio from './components/NewPortfolio';
// import NewResume from './components/NewResume';


function App() {

  const [screen, setScreen] = useState("about");

  return (
    <div >
     
     <About setScreen={setScreen} screen={screen}/>

     {/* {
        screen === "About" && <About setScreen={setScreen}/>
      }

      {
        screen === "NewPortfolio" && <NewPortfolio setScreen={setScreen}/>
      }

       {
        screen === "NewResume" && <NewResume setScreen={setScreen}/>
      }  */}




      
      
    </div>
  );
}

export default App;
