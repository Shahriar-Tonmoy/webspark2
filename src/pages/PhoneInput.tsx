import { ChangeEvent, useState, Dispatch, SetStateAction } from 'react';
import Flag from 'react-country-flag';
import { getCountries, getCountryCallingCode, Country, isValidPhoneNumber } from 'react-phone-number-input';
import { VscErrorSmall } from "react-icons/vsc";
import { IoIosCheckmarkCircle } from "react-icons/io";
import React from 'react';
//import {isValidPhoneNumber, getCountries,} from 'react-phone-number-input';

type SetPhone = Dispatch<SetStateAction<string>>;
type SetVPhone = Dispatch<SetStateAction<boolean>>;
function CustomDropdown(props: {setphone: SetPhone; phone: string; setvPhone:SetVPhone}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>("BD");
  const [error, seterror] = useState(true);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setShowDropdown(false);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    //console.log(props.phone)
    if(isValidPhoneNumber(value, selectedCountry)){
      props.setvPhone(true);
        seterror(false);
    }
    else{
      props.setvPhone(false);
        seterror(true)
    }
    const inputValue = value;
    const numericValue = inputValue.replace(/\D/g, ''); // Remove non-numeric characters
    props.setphone(numericValue === '' ? '' : Number(numericValue).toString());
    //props.setphone(value)
  };
  const handleWheel = (event: React.WheelEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  return (
    <div className="relative w-full bg-[#121326]">
      <label htmlFor="password" className={'border-2 border-[#272839] w-full rounded-lg bg-[#121326]'}>
        <div className="flex items-center h-full pr-1">
          <div className="h-full p-2.5 flex flex-row bg-[#121326] mr-4">
            <Flag countryCode={selectedCountry} style={{ fontSize: '18px' }} onClick={toggleDropdown} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 my-auto text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
                </svg>
          </div>
          <div className='flex flex-row text-[#585A85] text-md'>
            <p className='my-auto'>+</p>
          <p className='my-auto'>{getCountryCallingCode(selectedCountry)}</p>
          </div>
          <input
            onWheel={handleWheel}
            id="password"
            name="password"
            type="tel"
            pattern="[0-9]*"
            inputMode="tel"
            className="w-full py-3 bg-[#121326] lg px-3 border-0 active:border-0 active:outline-none focus:outline-none text-[#585A85] text-md"
            placeholder="01xxxxxxxxx"
            value={props.phone}
            onChange={handleInputChange}
          />
          {error && <div className='text-3xl text-red-700'>
          <VscErrorSmall />
          </div>}
          {!error && <div className='text-lg text-green-600'>
            <IoIosCheckmarkCircle/>
            </div>}
          {/* <div
            className="cursor-pointer ml-2"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showDropdown ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              )}
            </svg>
          </div> */}
        </div>
      </label>
      {showDropdown && (
  <div className="absolute top-full left-0 mt-1 bg-[#121326] border border-gray-200 rounded-lg shadow-lg max-h-40 overflow-y-auto">
    <ul>
      {getCountries().map((country) => (
        <li
          key={country}
          className="cursor-pointer py-2 hover:bg-[#7064E9] text-white m-0"
          onClick={() => handleCountrySelect(country)}
        >
          <Flag countryCode={country} style={{margin: 0}}  />
          {country}
        </li>
      ))}
    </ul>
  </div>
)}
    </div>
  );
}

export default CustomDropdown;
