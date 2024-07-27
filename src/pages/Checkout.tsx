import { ProductType } from "@/functions/types/producttype";
import React, { ChangeEvent, useEffect, useState } from "react";
import { APPCOOKIE, PRODUCTCOOKIE, getAppCookie } from "./Fuctions/appcookie/appcookie";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router";
import NavUpdated from "@/components/NavUpdated";
import FooterUpdated from "./FooterUpdated";


export default function Checkout() {
    const [coupon, setcoupon] = useState('');
    const [product, setproduct] = useState<ProductType>(null);
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const isbd = timezone == 'Asia/Dhaka'? true : false;
    const [Country, setCountry] = useState('')
    const [city, setcity] = useState('')
    const [address, setaddress] = useState('')
    const [cookie, setcookie] = useState('');
    const [error, settError] = useState(false);
    const [btnpressed, setbtnpressed] = useState(false);
    const [couponapplied, setcouponapplied] = useState(false);
    const [deliveryPolicyChecked, setDeliveryPolicyChecked] = useState(false);
    const [checkederror, setcheckederror] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setcookie(getAppCookie(APPCOOKIE));
    }, [])
    const handlecoupon = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setcoupon(value);
      };
      const handlecity = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setcity(value);
      };
      const handlecountry = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setCountry(value);
      };
      const handleaddress = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setaddress(value);
      };
      useEffect(() => {
        try{
            const prod = JSON.parse(getAppCookie(PRODUCTCOOKIE))
            prod.amount = isbd ? prod.amount*110 : prod.amount;
            setproduct(prod);
        }
        catch(err){
            //console.log(err)
        }

      }, [])

      const senddata = () => {
        if(deliveryPolicyChecked) {
        setbtnpressed(true);
        setcheckederror(false);
        // WARNING: For POST requests, body is set to null by browsers.
const data = JSON.stringify({
    "plan_id": product.id,
    "amount": product.amount,
    "address": address,
    "country": Country,
    "city": city,
    "ccode": isbd?'BDT': 'USD',
    "coupon": coupon
  });
  
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      console.log(this.responseText);
      try {
        const url = JSON.parse(this.response);
        setbtnpressed(false);
        window.location.href = url.url;
      }
      catch(e) {
        setbtnpressed(false);
      }
      
    }
  });
  
  xhr.open("POST", "https://genwebbuilder.com:7001/api/v1/paymenturl");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer "+cookie);
  
  xhr.send(data);
}
else {
  setcheckederror(true);
}
      }


      const senddatastripe = () => {
        console.log('stripe')
        if(deliveryPolicyChecked) {
        setbtnpressed(true);
        setcheckederror(false);
        // WARNING: For POST requests, body is set to null by browsers.
const data = JSON.stringify({
    "plan_id": product.id,
    "amount": product.amount,
    "address": address,
    "country": Country,
    "city": city,
    "ccode": isbd?'BDT': 'USD',
    "coupon": coupon
  });
  
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      console.log(this.responseText);
      try {
        const url = JSON.parse(this.response);
        setbtnpressed(false);
        window.location.href = 'https://genwebbuilder.com/payment?pid='+url.url;
      }
      catch(e) {
        setbtnpressed(false);
      }
      
    }
  });
  
  xhr.open("POST", "https://genwebbuilder.com:7001/api/v1/initstripe");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer "+cookie);
  
  xhr.send(data);
}
else {
  setcheckederror(true);
}
      }

      const senddatapag = () => {
        console.log('wrong');
        if(deliveryPolicyChecked) {
        setbtnpressed(true);
        setcheckederror(false);
        // WARNING: For POST requests, body is set to null by browsers.
const data = JSON.stringify({
  "amount": isbd? product.amount/110 :product.amount,
  "address": address,
  "country": Country,
  "city": city
});
  
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      console.log(this.responseText);
      try {
        const url = JSON.parse(this.response);
        setbtnpressed(false);
        window.location.href = url.url;
      }
      catch(e) {
        setbtnpressed(false);
      }
      
    }
  });
  
  xhr.open("POST", "https://genwebbuilder.com:7001/api/v1/payasgo");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer "+cookie);
  
  xhr.send(data);
}
else {
  setcheckederror(true);
}
      }

      const senddatastpag = () => {
        if(deliveryPolicyChecked) {
        setbtnpressed(true);
        setcheckederror(false);
        // WARNING: For POST requests, body is set to null by browsers.
const data = JSON.stringify({
  "amount": isbd? product.amount/110 :product.amount,
  "address": address,
  "country": Country,
  "city": city
});
  
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      console.log(this.responseText);
      try {
        const url = JSON.parse(this.response);
        setbtnpressed(false);
        window.location.href = 'https://genwebbuilder.com/payment?pid='+url.url;
      }
      catch(e) {
        setbtnpressed(false);
      }
      
    }
  });
  
  xhr.open("POST", "https://genwebbuilder.com:7001/api/v1/stpayasgo");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer "+cookie);
  
  xhr.send(data);
}
else {
  setcheckederror(true);
}
      }


      const applytoken = ()=> {
      
const data = JSON.stringify({
    "planid": product.id,
    "coupon": coupon
  });
  
    const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      try {
        const res = JSON.parse(this.response);
        if(res.state) {
          settError(false);
          setproduct((prevState) => ({...prevState, amount: res.amount}))
          setcouponapplied(true);
          settError(false);
        }
        else {
          settError(true);
          setcouponapplied(false);
        }
      }
      catch(e) {
        settError(true);
      }
    }
    else {
      settError(true);
    }
  });
  
  xhr.open("POST", "https://genwebbuilder.com:7001/api/vi/applytoken");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer "+cookie);
  
  xhr.send(data);
  

      }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleDeliveryPolicyChange(event: ChangeEvent<HTMLInputElement>): void {
    setDeliveryPolicyChecked(!deliveryPolicyChecked);


  }



  const [scrollTop, setScrollTop] = useState(0);
  const handleScroll = (event) => {
      setScrollTop(event.currentTarget.scrollTop);
      // Perform any other actions based on the scroll event
    };
  

  


    return (<div className="bg-[#06060D] w-screen h-full overflow-y-auto" onScroll={handleScroll}>
    <NavUpdated scroll={scrollTop} />
    {/*product!.id < 4 &&<div className="container mx-auto mt-[10%]">
        <div className="p-4 bg-gray-50 mt-8 sm:flex sm:flex-row space-y-3 rounded-lg border bg-[#121326] px-2 py-4 sm:px-6">
            <div className="flex flex-col rounded-lg bg-[#121326] sm:flex-row mt-24">
                <img className="m-2 w-24 h-24 rounded-md border object-cover object-center" src={itemimage} alt="" />
                <div className="flex w-full flex-col px-4 py-4">
                    {product && (
                        <>
                            <span className="font-semibold">{"Plan: " + product.name}</span>
                            <p className="text-lg font-bold">
                                {isbd ? 'BDT ' + (product.amount * 110).toFixed(2) : 'USD ' + product.amount}
                            </p>
                            <p className="text-lg font-bold">{product.webpage + ' Tokens'}</p>
                        </>
                    )}
                </div>
            </div>
            <div className="mt-6">
                    <label htmlFor="coupon" className="block text-sm font-medium text-slate-200">Coupon Code</label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                        <input type="text"
                        value={coupon}
                        onChange={handleInputChange}
                        name="coupon" id="coupon" className="flex-1 block w-full rounded-none rounded-l-md border-gray-300" placeholder="Coupon code"/>
                        <button onClick={applytoken} className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-200 text-sm text-slate-200">
                            Apply
                        </button>
                    </div>
                    {error && <p className="text-red-500 mt-2">Invalid Coupon code</p>}
                </div>

        </div>
            <div className="mt-10 bg-gray-50 lg:px-20 pt-1 lg:pt-20 lg:mt-0">
                <p className="text-xl font-medium">Payment Details</p>
                <p className="text-gray-400">Complete your order by providing your payment details.</p>

                <div className="mt-4">
                        <label htmlFor="country" className="block text-sm font-medium text-slate-200">Country</label>
                        <input value={Country} onChange={handlecountry} type="text" name="country" id="country" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="Country"/>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="city" className="block text-sm font-medium text-slate-200">City</label>
                        <input value={city} onChange={handlecity} type="text" name="city" id="city" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="City"/>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="address" className="block text-sm font-medium text-slate-200">Address</label>
                        <input value={address} onChange={handleaddress} type="text" name="address" id="address" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="Street Address"/>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">Total</p>
                        {product && <p className="text-2xl font-semibold text-gray-900">{isbd?'BDT '+(product.amount*110).toFixed(2):'USD '+product.amount}</p>}
                    </div>
                </div>
                <div className="mt-4 flex items-center">
                        <input
                            type="checkbox"
                            id="deliveryPolicyCheckbox"
                            checked={deliveryPolicyChecked}
                            onChange={handleDeliveryPolicyChange}
                            className="form-checkbox h-4 w-4 text-gray-600 transition duration-150 ease-in-out my-auto"
                        />
                        <label htmlFor="deliveryPolicyCheckbox" className="ml-2 text-sm text-slate-200 my-auto">
                            <p className="my-auto">I accept the <a href="/privacypolicy"><strong onClick={()=>{navigate('/privacypolicy')}} className="text-blue-500">Privacy Policy</strong></a>
                            <a href="/deliverypolicy"><strong onClick={()=>{}} className="text-blue-500">, Delivery Policy</strong></a>
                            <a href="/refundpolicy"><strong onClick={()=>{}} className="text-blue-500">, and Refund Policy </strong></a>
                            of Genwebbuilder
                            </p>
                        </label>
                    </div>
                <button onClick={deliveryPolicyChecked ? senddata : () => {console.log('idle')}} className={deliveryPolicyChecked?"mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white":"mt-4 mb-8 w-full rounded-md bg-slate-500 px-6 py-3 font-medium text-white"}>{btnpressed? 'Processing ..': 'Place Order'}</button>
            </div>*/}
            {(product) && <div className="min-h-screen bg-[#06060D] py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl mx-auto w-2/3">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-[#121326] text-slate-200 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-3xl font-semibold">Checkout</h1>
              <p className="text-slate-200-600 mt-2">Complete your purchase</p>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-6">
              <div className="text-slate-200">
                  <h2 className="text-lg font-semibold mt-4">Product Information</h2>
                  <p>Name: {product.name}</p>
                  <p>Price: {isbd ? 'BDT ' + (product.amount).toFixed(2) : 'USD ' + product.amount}</p>
                  <p>Coins: {product.id > 3? isbd?((product.amount/110)*10).toFixed(0):((product.amount)*10).toFixed(0) :product.webpage}</p>
                </div>
                {product!.id > 3 && 
                <label className="block">
                  <span className="text-slate-200">Amount</span>
                  <input
                    type="number"
                    name="country"
                    value={product!.amount}
                    onChange={(e) => {
                      let am = parseFloat(e.target.value);
                      if(isbd) {
                        if(am < 220) {
                          am = 220;
                        }
                      }
                      else {
                        if(am < 2) {
                          am = 2;
                        }
                      }
                      setproduct((Prevs) => {
                        return {
                          ...Prevs,
                          amount: am
                        }
                      })
                    }}
                    className="mt-1 block w-full rounded-md bg-[#121326] placeholder:text-white px-2 focus:border-gray-500 focus:bg-[#121326] text-white focus-outline-0 active-outline-0 border-2 border-slate-500 focus:ring-0 py-2"
                  />
                </label>}

                {product!.id < 4 && <><label className="block">
                    <span className="text-slate-200">Coupon Code</span>
                    <input
                      type="text"
                      name="couponCode"
                      value={coupon}
                      onChange={handlecoupon}
                      className="mt-1 block w-full rounded-md placeholder:text-white px-2 border-[#121326] focus:border-gray-500 focus:bg-[#121326] text-white focus-outline-0 active-outline-0 border-2 border-slate-500 focus:ring-0 py-2 bg-[#121326]" />
                  </label><div className="flex justify-end mt-6">
                      <button type="button" onClick={applytoken} className="font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200 px-4 py-2 rounded-md mr-2 hover">Apply Coupon</button>
                    </div></>}
                {couponapplied && (
                  <p className="text-green-600 mt-2">Coupon applied successfully!</p>
                )}
                {error && (
                  <p className="text-red-600 mt-2">Invalid Coupon!</p>
                )}
                <label className="block">
                  <span className="text-slate-200">Country</span>
                  <input
                    type="text"
                    name="country"
                    value={Country}
                    onChange={handlecountry}
                    className="mt-1 block w-full rounded-md bg-[#121326] placeholder:text-white px-2 border-2 border-slate-700 py-2 focus:outline-0 focus:border-slate-700 active:outline-0 active:border-slate-700"
                  />
                </label>
                <label className="block">
                  <span className="text-slate-200">City</span>
                  <input
                    type="text"
                    name="city"
                    value={city}
                    onChange={handlecity}
                    className="mt-1 block w-full rounded-md bg-[#121326] placeholder:text-white px-2 border-2 border-slate-700 py-2 focus:outline-0 focus:border-slate-700 active:outline-0 active:border-slate-700"
                  />
                </label>
                <label className="block">
                  <span className="text-slate-200">Address</span>
                  <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={handleaddress}
                    className="mt-1 block w-full rounded-md bg-[#121326] placeholder:text-white px-2 border-2 border-slate-700 py-2 focus:outline-0 focus:border-slate-700 active:outline-0 active:border-slate-700"
                  />
                </label>
                
              </div>
              <div className="mt-4 flex items-center">
                        <input
                            type="checkbox"
                            id="deliveryPolicyCheckbox"
                            checked={deliveryPolicyChecked}
                            onChange={handleDeliveryPolicyChange}
                            className="form-checkbox h-4 w-4 text-gray-600 transition duration-150 ease-in-out my-auto"
                        />
                        <label htmlFor="deliveryPolicyCheckbox" className="ml-2 text-sm text-slate-200 my-auto">
                            <p className="my-auto">I accept the <a href="/privacypolicy"><strong onClick={()=>{navigate('/privacypolicy')}} className="text-blue-500">Privacy Policy</strong></a>
                            <a href="/deliverypolicy"><strong onClick={()=>{}} className="text-blue-500">, Delivery Policy</strong></a>
                            <a href="/refundpolicy"><strong onClick={()=>{}} className="text-blue-500">, and Refund Policy </strong></a>
                            of Genwebbuilder
                            </p>
                        </label>
                    </div>
              {checkederror && <p className="text-red-500 text-center">Please accept our policy</p>}
              <div className="flex justify-center mt-6">
                {isbd && <button className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white w-2/3 py-2 rounded-md cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200" onClick={product!.id > 3 ?senddatapag :senddata}>{btnpressed? 'Processing ..': 'Place Order'}</button>}
                {!isbd && <button className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white w-2/3 py-2 rounded-md cursor-pointer transition duration-500 hover:shadow-lg hover:shadow-pink-200" onClick={product!.id > 3 ?senddatastpag :senddatastripe}>{btnpressed? 'Processing ..': 'Place Order'}</button>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>}
            <FooterUpdated />
        </div>
  );
}
