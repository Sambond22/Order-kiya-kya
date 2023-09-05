import Header from "./Components/Layout/Header"
import {Home} from "./Components/Home"
import {Footer} from "./Components/Layout/Footer"
import {BrowserRouter as Router, Routes,Route }  from "react-router-dom" 
import './App.css';

function App() {
  return (

    <Router>
       <div className="App">
      <Header></Header>
      <div className="container container-fluid">
        <Routes>
          <Route path="/" element={<Home></Home>} exact></Route>
        </Routes>
        </div>
  
      <Footer></Footer>
    </div>
    </Router>
   
  );
}

export default App;
