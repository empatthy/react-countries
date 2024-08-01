import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CountryPage from './pages/CountryPage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    loader: async () => {
      const res = await fetch(`https://restcountries.com/v3.1/all?fields=name,flags`);
      if (!res.ok) {
        throw new Response('Something went wrong', { status: res.status });
      }
      return res;
    },
  },
  {
    path: `:name`,
    element: <CountryPage />,
    errorElement: <ErrorPage />,
    loader: async ({ params }) => {
      const res = await fetch(`https://restcountries.com/v3.1/name/${params.name}`);
      if (!res.ok) {
        throw new Response('Something went wrong', { status: res.status });
      }
      return res;
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
