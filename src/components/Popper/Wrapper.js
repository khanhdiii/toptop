import React from 'react';

function Wrapper({ children, className }) {
  return (
    <div
      className={`wrapper w-full max-h-[calc((100vh-96px)-60px)] min-h-[100px] rounded-lg bg-white shadow-md ${className}`}
    >
      {children}
    </div>
  );
}

export default Wrapper;
