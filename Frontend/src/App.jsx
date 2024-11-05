import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react'

import './App.css'
import CustomerRouters from './Customer/Component/Routes/CustomerRouters.jsx'

import { Routes, Route } from 'react-router-dom'
import AdminRouter from "./Customer/Component/Routes/adminRouter.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Routes>
          <Route path='/*' element={<CustomerRouters></CustomerRouters>}>
          </Route>
          <Route path='/admin/*' element={<AdminRouter/>}></Route>
        </Routes>

      </div >

    </>
  )
}

export default App;
