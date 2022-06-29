import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Home from './component/home/home';
import Listing from './component/listing/listing';
import RestDetails from './component/details/restDetails';
import Login from './component/login/login';
import Register from './component/login/register';
import ViewOrder from './component/booking/vieworder';
import PlaceOrder from './component/booking/placeorder';
import Footer from './footer';


const Routing = ()=>{
    return (
        <BrowserRouter>
        <Route exact path="/" component ={Home}/>
        <Route path="/listing/:id" component={Listing}/>
        <Route path="/details" component={RestDetails}/>
        <Route path="/placeOrder/:restName" component={PlaceOrder}/>
        <Route path="/viewBooking" component={ViewOrder}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Footer/>
        </BrowserRouter>
    )
}
export default Routing;