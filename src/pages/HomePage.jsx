import React from 'react';
import { Link } from 'react-router-dom';
import CountryItem from '../components/CountryItem';

function HomePage({ countries }) {
  const renderedCountries = countries.map((country) => (
    <Link key={country.name.common} to={country.name.common}>
      <CountryItem country={country} />
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
