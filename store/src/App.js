import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PersonalAddress from "./pages/PersonalAddress.jsx"
import AccountConfirmation from "./pages/AccountConfirmation.jsx";
import OrderConfirmation from "./pages/OrderConfirmation.jsx";
import Cart from "./pages/Cart.jsx";
import ItemDescription from "./pages/ItemDescription.jsx";
import PaymentForm from "./pages/PaymentForm.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/PersonalAddress" element={<PersonalAddress />} />
        <Route path="/login/PersonalAddress/AccontConfirmation" element={<AccountConfirmation />} />
        <Route path="/OrderConfirmation" element={<OrderConfirmation />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/description" element={<ItemDescription/>} />
        <Route path="/PaymentForm" element={<PaymentForm />} />
      </Routes>
    </Router>
  );
};

export default App;
