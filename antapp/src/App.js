import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from 'Container/Home';
import User from 'Container/User';
const App = () => {

  return (
      <Routes>
        <Route  path='/' element={<Home></Home>}></Route>
        <Route path='/user' element={<User></User>}></Route>
      </Routes>
  );
};


export default App;