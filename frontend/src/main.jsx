import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router'
import {Home, About, Contact, Login, Signup} from './pages/allPages'
import Layout from './Layout'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
         <Route path='' element={<Home />} />
         <Route path='about' element={<About />} />
         <Route path='contact' element={<Contact />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login/signup' element={<Navigate to="/signup" replace />} />
<Route path='/signup/login' element={<Navigate to="/login" replace />} />
<Route path='*' element={<Navigate to="/" replace />} />
    </Routes>
   </BrowserRouter>
)

