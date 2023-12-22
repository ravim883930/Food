import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Pages/Home';



const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
