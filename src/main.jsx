import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Section1 from './components/Section1.jsx'
import Section2 from './components/Section2.jsx'
import Section5 from './components/Section5.jsx'
import Section6 from './components/Section6.jsx'
import Section3 from './components/Section3.jsx'
import Section4 from './components/Section4.jsx'
import Section7 from './components/Section7.jsx'
import Section8 from './components/Section8.jsx'
import Section9 from './components/Section9.jsx'
import Section10 from './components/Section10.jsx'
import Footer from './components/Footer.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: 
        <>
          <Home />
          <Section1 />
          <Section2 />
          <Section3/>
          <Section4/>
          <Section5 />
          <Section6/>
          <Section7/>
          <Section8/>
          <Section9/>
          <Section10/>
          <Footer/>
        </>
      },

    ]

  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
