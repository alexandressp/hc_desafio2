import React from 'react';
import Home from './view/Home';
import Topo from './components/Topo';

//Function Components

const App: React.FC = () => {
  return (
    <>      
      <Topo/>
      <Home/>
    </>    
  )
    ;
}

export default App;