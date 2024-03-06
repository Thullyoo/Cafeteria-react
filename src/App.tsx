import './App.scss'

import Home from './pages/Home';
import Cafe from './pages/Cafe';
import User from './pages/User';
import Admin from './pages/Admin';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
    <Routes>
      <Route path='/cafe' element={<Cafe/>}></Route> 
      <Route path='/user' element={<User/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route> 
      <Route path='/*' element={<Home/>}></Route>
   </Routes>
    </Router>
    </>
  )
}

export default App
