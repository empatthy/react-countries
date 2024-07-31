import React from 'react';
import { Link } from 'react-router-dom';

function HomePage({ countries }) {
  const renderedCountries = countries.map((country) => (
    <Link key={country.name.common} to={country.name.common}>
      <li className="flex justify-between items-center cursor-pointer list-none mb-2 px-4 sm:px-10 shadow-md sm:rounded-lg h-[50px] sm:h-[80px] text-start text-lg sm:text-2xl text-gray-700 font-semibold hover:bg-slate-50">
        <span>{country.name.common}</span>
        <img className="w-8 h-5" alt="Flag" src={country.flags.svg} />
      </li>
    </Link>
  ));

  return (
    <div className="sm:p-10 p-0 bg-gray-100 min-h-screen w-screen">
      <div className="mx-auto sm:w-[500px] w-full bg-white sm:p-10 py-8 rounded-lg">
        <h1 className="text-center text-3xl sm:text-5xl font-bold mb-10 text-gray-700">
          Countries
        </h1>
        <ul>{renderedCountries}</ul>
      </div>
    </div>
  );
}

export default HomePage;
