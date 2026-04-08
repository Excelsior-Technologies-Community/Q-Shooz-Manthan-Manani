import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from './store/authSlice'
import authService from './services/auth'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import About from './Pages/About'
import About2 from './Pages/About2'
import About3 from './Pages/About3'
import Faqs from './Pages/Faqs'
import Contact from './Pages/Contact'
import Lookbook from './Pages/Lookbook'
import Wishlist from './Pages/Wishlist'
import SizeGuide from './Pages/SizeGuide'
import Collection from './Pages/Collection'
import SingleProduct from './Pages/SingleProduct'

const App = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
        }
      } catch {
        // Token might be expired or invalid
      }
    };
    checkUser();
  }, [dispatch]);

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/about2' element={<About2 />} />
        <Route path='/about3' element={<About3 />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/lookbook' element={<Lookbook />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/size' element={<SizeGuide/>}/>
        <Route path='collections' element={<Collection/>}/>
        <Route path='/singleproduct' element={<SingleProduct/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App