import React from 'react'
import fakeData from './../fakeData/index';

function Inventory() {

  const handleClick = () => {
    fetch("http://localhost:5000/addProduct", {
      method : "POST",
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify(fakeData)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  return (
    <div>
     <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Inventory
