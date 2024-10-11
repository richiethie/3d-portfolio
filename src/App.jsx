import React from 'react'
import{Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'


const App = () => {

  return (
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      {/* <Route path='/products/:id' element={<ShowProducts />} />
      <Route path='/cart/:id' element={<AddToCart />} />
      <Route path='/products/update/:id' element={<EditProducts />} />
      <Route path='/products/delete/:id' element={<DeleteProducts />} />
      <Route path='/cart/delete/:id' element={<DeleteCart />} /> */}
    </Routes>
  )
}

export default App
