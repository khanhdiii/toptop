import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';

function Header({ title, onBack }) {
  return (
    <header className="header relative h-12 flex items-center mt-2">
      <button className="back-btn w-12 h-full bg-transparent cursor-pointer" onClick={onBack}>
        <FaChevronLeft />
      </button>
      <h4 className="header-title absolute font-semibold text-2xl left-1/2 transform -translate-x-1/2">{title}</h4>
    </header>
  );
}

export default Header;
