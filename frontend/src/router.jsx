import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Host from './pages/Host'
import Studio from './pages/Studio'

const Router = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/host' element={<Host/>}></Route>
        <Route path='/studio' element={<Studio/>}></Route>
    </Routes>
    </>
  )
}

export default Router