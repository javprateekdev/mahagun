import React from 'react';
import {Link} from 'react-router-dom';

const Thankyou = () => {
 

  
  return (
    <div style={{marginTop:'100px'}}>

        <h1 style={{marginLeft:'200px'}}>Thank You</h1>
        <p>
            Thank you for showing interest in Godrej Woods.We have receivedyour Query & will get back to you soon as possible.
            In the meantime,if you can Call or WhatsApp us <h3>+91 8130306040</h3>
            ©{new Date().getFullYear()} Godrej Properties | Godrej Woods.All rights reserved

            </p>
          <Link to="/"> <button>Back To Site</button></Link> 
    </div>
  )
}

export default Thankyou;