import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

function AccountItem() {
  return (
    <div className="wrapper flex items-center px-4 py-1 cursor-pointer hover:bg-gray-100">
      <img
        className="avatar w-10 h-10 rounded-full object-cover"
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4b85df94ddbc913a995d4d721e417580.jpeg?x-expires=1702965600&x-signature=5z%2FUhlUHoTNjTHavvyivh%2Fxztd4%3D"
        alt=""
      />
      <div className="info flex-1 ml-3">
        <p className="name text-base flex items-center font-medium">
          <span>Nguyen Van A</span>
          <AiFillCheckCircle className="text-blue-400 ml-1" />
        </p>
        <span className="userName">nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
