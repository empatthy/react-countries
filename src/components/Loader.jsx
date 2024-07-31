import React from 'react';

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="rounded-full h-[36px] w-[36px] border-gray-400 border-t-gray-100 border-4 border-solid animate-spin" />
    </div>
  );
}

export default Loader;
