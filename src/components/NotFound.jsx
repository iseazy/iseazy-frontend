import { useHistory } from 'react-router-dom';

export function NotFound() {
  const history = useHistory();
  return (
    <div
      style={{ backgroundSize: '100% auto' }}
      className="flex flex-col pb-64 text-center bg-no-repeat bg-bottom relative items-center justify-center w-screen h-screen bg-custom-gradient"
    >
      <span className="font-extrabold text-6xl mb-4 text-gray-100">404</span>
      <span className="font-extrabold text-4xl mb-4 text-gray-100">Error!</span>
      <span className="text-lg mb-12 text-gray-100">Sorry! The page you were looking for doesn&apos;t exist.</span>
      <button
        className="flex justify-center text-sm font-light m-2 bg-red-100 rounded-full items-center text-center leading-3.5 disabled:opacity-50 disabled:cursor-not-allowed h-8 w-40 focus:outline-none text-white"
        onClick={() => history.push('/')}
      >
        Go back to home
      </button>
    </div>
  );
}
