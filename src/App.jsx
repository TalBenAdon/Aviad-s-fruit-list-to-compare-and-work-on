import { useState } from 'react';
import './App.css'

import Layout from './Layout'


import UserContext from './context/UserContext';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  return (

    <UserContext.Provider value={{ loggedIn }}>

      <Routes>
        <Route path='/login' element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path='*' element={<Layout />} />
      </Routes>
    </UserContext.Provider>

  )
}

export default App
