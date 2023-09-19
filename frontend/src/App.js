import './App.css';
import Home from './Components/Home';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import Cart from "./Components/cart/Cart"
import Delivery from './Components/cart/Delivery';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/eats/stores/:id/menus' element={<Menu/>} exact />
            <Route path='/cart' element={<Cart></Cart>} exact></Route>
            <Route path='/delivery' element={<Delivery></Delivery>} exact></Route>
          </Routes>

        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
