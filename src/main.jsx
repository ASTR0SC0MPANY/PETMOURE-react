import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './HomePage.jsx'
import BanhoTosa from './banhoetosa.jsx'
import Cachorro from './Cachorro.jsx'
import Gato from './Gato.jsx'
import {Login} from './login.jsx'
import Header from './Header.jsx'
 //ngc do footer
 import Sobre from './sobre.jsx'
 import Privacidade from './privacidade.jsx'
 import Coorporativas from './coorporativas.jsx'
 import Politicas from './politicas.jsx'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter ([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/cachorro",
    element: <Cachorro />
  },
  {
    path: "/gato",
    element: <Gato />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/header",
    element: <Header />
  },
  {
    path: "/sobre",
    element: <Sobre />
  },
  {
    path: "/privacidade",
    element: <Privacidade />
  },
  {
    path: "/coorporativas",
    element: <Coorporativas/>
  },
  {
    path: "/politicas",
    element: <Politicas/>
  },
  {
    path: "/banhoetosa",
    element: <BanhoTosa/>
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
