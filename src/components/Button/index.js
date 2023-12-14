import React from 'react';

function Button({ to, href, children, onClick }) {
  let Component = 'button';

  return (
    <Component className="min-w-[100px] py-2 px-4 rounded text-2xl font-bold ">
      <span>{children}</span>
    </Component>
  );
}

export default Button;
