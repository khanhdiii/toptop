import React from 'react';
import { Link } from 'react-router-dom';

function Button({
  to,
  href,
  classic = false,
  primary = false,
  large = false,
  small = false,
  outline = false,
  leftIcon = false,
  rightIcon = false,
  children,
  className,
  onClick,
  ...passProps
}) {
  let Comp = 'button';

  const props = { onClick, ...passProps };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const buttonClasses = `
    w-full 
    px-3 
    py-[2px] 
    rounded 
    text-[24px] 
    font-semibold 
    flex 
    items-center 
    ${className}
    ${primary ? 'text-white bg-rose-500 hover:cursor-pointer hover:bg-rose-600' : ' hover:bg-gray-100'}
    ${classic ? 'text-black bg-white border border-gray-300 hover:bg-gray-100' : ''}
    ${large ? 'min-w-[140px] px-5 py-4 text-red-600 hover:bg-rose-100' : ''}
    ${small ? 'text-red-600 hover:bg-rose-100 min-w-[88px] px-4 py-1' : ''}
    ${outline ? 'border-2 border-red-600' : ''}
  `;

  return (
    <Comp className={buttonClasses} {...props}>
      {leftIcon && <span className="icon mx-2">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="icon mx-2">{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
