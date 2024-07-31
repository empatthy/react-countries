import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex h-screen justify-center items-center">
        <div className="text-gray-700">
          <h1 className="font-bold text-6xl">{error.status}</h1>
          <p>{error.data}</p>
          <Link className="underline" to="/">
            Home
          </Link>
        </div>
      </div>
    );
  }

  throw error;
}
