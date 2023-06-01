import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from 'Container/Home';
import User from 'Container/User';
import Customer from 'Container/Customer';
import Chart from 'Container/Chart';
import { PrimaryLayout } from 'Component/Layout';
const App = () => {

  return (
    <BrowserRouter>
      <PrimaryLayout tittle={"Home Page"}>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/user' element={<User></User>}></Route>
          <Route path='/customer' element={<Customer></Customer>}></Route>
          <Route path='/chart' element={<Chart></Chart>}></Route>
        </Routes>
      </PrimaryLayout>
    </BrowserRouter>

  );
};


export default App;