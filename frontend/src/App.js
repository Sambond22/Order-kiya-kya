import './App.css';
import Home from './Components/Home';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import Cart from "./Components/cart/Cart"
import Delivery from './Components/cart/Delivery';
import Login from "./Components/user/Login";
import Register from './Components/user/Register';
import { useEffect, useState } from 'react';
import { loadUser } from './Actions/userActions';
import  Profile  from  './Components/user/Profile';
import store from "./store";
import UpdateProfile from './Components/user/UpdateProfile';
import ForgotPassword from './Components/user/ForgotPassword';
import NewPassword from './Components/user/NewPassword';
import ConfirmOrder from './Components/cart/ConfirmOrder';
import Payment from './Components/cart/Payment';
// payment
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import OrderSuccess from './Components/cart/OrderSuccess';
import ListOrders from './Components/order/ListOrders';
import OrderDetails from './Components/order/OrderDetails';

function App() {
  const [stripeApiKey , setStripeApiKey]=useState("");

  useEffect(()=>{
    store.dispatch(loadUser());
    async function getStripeApiKey(){
      const {data}=await axios.get("/api/v1/stripeapi");
      setStripeApiKey(data.stripeApiKey);
    }
    getStripeApiKey();
  },[]);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
          
            <Route path='/' element={<Home/>} exact/>
            <Route path='/eats/stores/search/:keyword' element={<Home></Home>} exact></Route>
            <Route path='/eats/stores/:id/menus' element={<Menu/>} exact />
            <Route path='/cart' element={<Cart></Cart>} exact></Route>
            <Route path='/delivery' element={<Delivery></Delivery>} exact></Route>
            {/* user */}
            <Route path='/users/login'
             element={<Login></Login>} exact></Route>
             <Route path='/users/signup' element={<Register></Register>} exact></Route>
            <Route path='/users/me' element={<Profile></Profile>} exact></Route>
            <Route path='/users/me/update' element={<UpdateProfile></UpdateProfile>} exact></Route>
            <Route path='/users/forgetPassword' element={<ForgotPassword></ForgotPassword>} exact></Route>
            <Route path='/users/resetPassword/:token' element={<NewPassword></NewPassword>} exact></Route>
            <Route path='/confirm' element={<ConfirmOrder></ConfirmOrder>}></Route>

            {/* payment  */}
            {
              stripeApiKey && (
                <Route path='/payment'
                element={<Elements stripe={loadStripe(stripeApiKey)}>
                  <Payment></Payment>
                </Elements>}
                ></Route>
              )
            }
{/* ordersuccess */}
            <Route path='/success' element={<OrderSuccess></OrderSuccess>}></Route>
            {/* orderlist */}

            <Route path='/eats/orders/me/myOrders' element={<ListOrders></ListOrders>}></Route>
            
            <Route path='/eats/orders/:id' element={<OrderDetails></OrderDetails>}></Route>
          </Routes>

        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
