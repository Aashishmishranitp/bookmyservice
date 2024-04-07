import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import AllServise from './component/Servises/AllServise.jsx'
import Carpenter from './component/Servises/Carpenter.jsx'
import Contact from './component/Contact/Contact.jsx'
import Labour from './component/Servises/Labour.jsx'
import Mason from './component/Servises/Mason.jsx'
import Painter from './component/Servises/Painter.jsx'
import Plumber from './component/Servises/Plumber.jsx'
import Electrician from './component/Servises/Electrician.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<AllServise />}></Route>
      <Route path="/services/carpenter" element={<Carpenter />} />
      <Route path="/services/labour" element={<Labour />} />
      <Route path="/services/mason" element={<Mason />} />
      <Route path="/services/painter" element={<Painter />} />
      <Route path="/services/plumber" element={<Plumber />} />
      <Route path="/services/electrician" element={<Electrician />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
