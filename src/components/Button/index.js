import React from 'react';
import { Link } from 'react-router-dom';

function Button({ to, href, primary = false, secondary = false, outline = false, children, onClick, ...passProps }) {
  let Comp = 'button';

  const props = { onClick, ...passProps };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const buttonClassName = `min-w-[100px] py-2 px-5 rounded text-2xl font-bold ${
    primary
      ? 'text-white bg-red-600 hover:cursor-pointer'
      : 'text-black bg-white border border-gray-300 hover:bg-gray-100'
  }
      ${secondary ? '' : ''}
  ${outline ? 'border-2 border-red-600' : ''}`;

  return (
    <Comp className={buttonClassName} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
