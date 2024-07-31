import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

function CountryPage() {
  const countryInfo = useLoaderData();
  console.log(countryInfo);

  return (
    <div className="pt-[100px] sm:bg-gray-100 min-h-screen">
      {
        <div className="mx-auto sm:w-[500px] bg-white p-10 rounded-xl text-gray-700">
          <img className="h-[130px] w=[260px] mx-auto" alt="Flag" src={countryInfo[0].flags.svg} />
          <p className="text-center my-5 font-bold uppercase text-xl ">
            {countryInfo[0].name.common}
          </p>
          <p className="mb-3">
            <span className="font-semibold text-lg">Capital:</span> {countryInfo[0].capital[0]}
          </p>
          <p className="mb-3">
            <span className="font-semibold text-lg">Continent:</span> {countryInfo[0].continents[0]}
          </p>
          <div className="flex justify-between items-center">
            <p className="mb-3">
              <span className="font-semibold text-lg">Population:</span> {countryInfo[0].population}
            </p>
            <Link to="/">
              <button className="border-2 rounded border-gray-700 w-[64px] h-[32px] hover:bg-gray-600 hover:text-white active:bg-gray-700">
                Back
              </button>
            </Link>
          </div>
        </div>
      }
    </div>
  );
}

export default CountryPage;
