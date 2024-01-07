import { useState } from 'react';
import './App.css'

import Layout from './Layout'


import UserContext from './context/UserContext';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import axios from 'axios';

function App() {

  // axios.post('https://jbh-mockserver.onrender.com/login', { userName: 'na', password: '123' })
  //   .then(response => {
  //     console.log(response);
  //   })

  const [loggedIn, setLoggedIn] = useState(false)
  const [savedUserInfo, setSavedUserInfo] = useState({})
  console.log(savedUserInfo);
  return (


    <UserContext.Provider value={{ loggedIn, savedUserInfo }}>

      <Routes>
        <Route path='/login' element={<Login setLoggedIn={setLoggedIn} setSavedUserInfo={setSavedUserInfo} />} />
        <Route path='*' element={<Layout />} />
      </Routes>
    </UserContext.Provider>

  )
}

export default App
