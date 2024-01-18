import React from 'react'
import { useState } from 'react'
function Payment() {
    const [amount, setamount] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(amount === ""){
        alert("please enter amount");
        }else{
          var options = {
            key: "rzp_test_PxyRvyrtC90mqn",
            key_secret:"MyOrpu3fQfm9l0PE4ErdNvht",
            amount: amount *100,
            currency:"INR",
            name:"STARTUP_PROJECTS",
            description:"for testing purpose",
            handler: function(response){
              alert(response.razorpay_payment_id);
            },
            prefill: {
              name:"Velmurugan",
              email:"mvel1620r@gmail.com",
              contact:"7904425033"
            },
            notes:{
              address:"Razorpay Corporate office"
            },
            theme: {
              color:"#3399cc"
            }
          };
          var pay = new window.Razorpay(options);
          pay.open();
        }
      }

    return (
      <div className="App h-screen flex flex-col items-center justify-center bg-primary">
      <h2 className="text-3xl text-white font-bold mb-4">Subscribe for Mentorship Sessions</h2>
      <p className="text-gray-600 mb-6">Enter the amount and proceed with the payment for mentorship sessions.</p>
      <div className=" rounded-md">
        <input
          type="text"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setamount(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
      >
        Subscribe Now
      </button>
    </div>
    )
}

export default Payment