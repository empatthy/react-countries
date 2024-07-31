import Loader from './components/Loader';
import HomePage from './pages/HomePage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

function App() {
  /* const [countries, setCountries] = useState([]); */
  /* const [isLoading, setIsLoading] = useState(true); */
  const countries = useLoaderData();

  /* useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all?fields=name,flags')
      .then((response) => {
        setCountries(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); */

  return <div>{/* isLoading ? <Loader /> :  */ <HomePage countries={countries} />}</div>;
}

export default App;
