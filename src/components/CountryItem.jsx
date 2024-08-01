import React from 'react';

function CountryItem({ country }) {
  return (
    <li
      className="
            flex 
            justify-between 
            items-center 
            cursor-pointer 
            list-none 
            mb-2 
            px-4 
            sm:px-10 
            shadow-md 
            sm:rounded-lg 
            h-[50px] 
            sm:h-[80px] 
            text-start 
            text-lg 
            sm:text-2xl 
            text-gray-700 
            font-semibold 
            hover:bg-slate-50
        ">
      <span>{country.name.common}</span>
      <img className="w-8 h-5" alt="Flag" src={country.flags.svg} />
    </li>
  );
}

export default CountryItem;
