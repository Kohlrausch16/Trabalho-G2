import React from "react";
import PersonalAddressForm from "../components/personal-address-form.jsx";
import NavBar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";



const PersonalAddress = () => {
  return (
    <div className="PersonalAdress">
      <NavBar />
      <br /><br />
      <PersonalAddressForm />


      <Footer />
    </div>
  );
};

export default PersonalAddress;