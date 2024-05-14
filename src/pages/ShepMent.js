import React, { useState } from "react";
import { useShopContext } from "./../Hook/useShopContext";
import { useNavigate } from 'react-router-dom';


function ShepMent() {
  const { user, storeProduct, storeReset } = useShopContext();
  const [userDtls, setUserDtls] = useState({
    name: user.name,
    address: "",
    phone: "",
    email: user.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDtls({ ...userDtls, [name]: value });
  };

  const navigate = useNavigate()


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userDtls);
    fetch("http://localhost:5000/confirmOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ storeProduct, userDtls }),
    })
      .then((res) => res.json())
      .then((data) => {
        storeReset();
        navigate("/thanks");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="shipment-form" onSubmit={handleSubmit}>
      <h2> Details</h2>
      <div className="form-group">
        <label> Name:</label>
        <input
          type="text"
          value={userDtls.name}
          name="name"
          required
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label> Address:</label>
        <input
          type="text"
          name="address"
          value={userDtls.address}
          required
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={userDtls.email}
          required
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Phone Number:</label>
        <input
          type="number"
          name="phone"
          value={userDtls.number}
          required
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ShepMent;
