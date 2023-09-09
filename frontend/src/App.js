import './App.css';
import Home from './Components/Home';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/eats/stores/:id/menus' element={<Menu/>} exact />
          </Routes>

        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
