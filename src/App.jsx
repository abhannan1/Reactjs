import React from 'react'
import './App.css'
// import UseRefBasics from './useState/UseRefBasics';
// import ControlledInputs from './controlledInputs/ControlledInputs';
// import CustomHook from './useState/CustomHook';
// import CustomHook2 from './useState/CustomHook2';
// import Navbar from './ContextAPI.jsx/Navbar';
// import UseReducer1 from './useReducer/UseReducer1';
// import LowerState from './Performance';
import ControlledInputsPerformance from './Performance/Example2/ControlledInputsPerformance.jsx';
import UseEffect from './useState/UseEffect';
// import Index from "./reactMemo&useCallback/Index"
import Index from "./SuspenseAPI/Index"
import LatestReact from './useTransition/Index.jsx';
import SlowComponent from './SuspenseAPI/SlowComponent';

function App() {
  
  return(
    <div className='container'>
      <Index/>
   </div>
  );
}

export default App

