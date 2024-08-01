import HomePage from './pages/HomePage';
import { useLoaderData } from 'react-router-dom';

function App() {
  const countries = useLoaderData();

  return <HomePage countries={countries} />;
}

export default App;
