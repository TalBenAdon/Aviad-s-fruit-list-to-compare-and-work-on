import { useEffect, useState } from 'react';
import Content from './Content';
import Cart from './Cart';
import DataContext from './context/DataContext';
import UserContext from './context/UserContext';
import { useContext } from 'react'
import data from './data'
import { useNavigate } from 'react-router-dom'

export default function Layout() {
  const nav = useNavigate()
  const [cart, setCart] = useState({})

  const { loggedIn } = useContext(UserContext)
  console.log(loggedIn);

  useEffect(() => {
    if (!loggedIn) {
      nav('/login')

    }
  }, [])


  return (
    <DataContext.Provider value={{ cart, setCart }} >
      <div className="layout">
        <Cart />
        <Content />

      </div>
    </DataContext.Provider>
  )
}
