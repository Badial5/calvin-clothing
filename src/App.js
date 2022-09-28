import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Navigation from './routes/home/navigation/navigation.component'
import Home from './routes/home/home.component'
import Authentication from './routes/home/authentication/authentication.component'
import Ckeckout from './routes/checkout/checkout.component'

//context
import Shop from "./components/shop/shop.component"


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
      <Route index element={ <Home /> } />
      <Route path='shop' element={<Shop />} />
      <Route path='auth' element={<Authentication />} />
      <Route path='checkout' element={<Ckeckout />} />
      </Route>
    </Routes>
     
  )
}

export default App
