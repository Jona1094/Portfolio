import React, { useState, useEffect } from 'react';
import Loader from './components/Loader/Loader';
import Header from './components/Header/Header'
import Presentacion from './components/Presentacion/Presentacion'
import Tecnologias from './components/Tecnologias/Tecnologias';
import Portfolio from './components/Portfolio/Portfolio';

function App() {

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1000)
  }, [])

  return (
    <div className="App">
      {loader ? (
        <Loader/>
      ) : (
        <div>
          <Header/>
          <Presentacion/>
          <Tecnologias/>
          <Portfolio/>
          </div>
      )}
    </div>
  );
}

export default App;
