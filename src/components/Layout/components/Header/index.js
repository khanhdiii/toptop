import React, { useEffect, useState } from 'react';
import images from '~/assets/images';
import Button from '~/components/Button';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import {
  AiOutlinePlus,
  AiFillCloseCircle,
  AiOutlineLoading3Quarters,
  AiOutlineSearch,
  AiOutlineMore,
} from 'react-icons/ai';
import { FaQuestion } from 'react-icons/fa';
import { MdLanguage, MdKeyboard } from 'react-icons/md';

const MENU_ITEMS = [
  {
    icon: <MdLanguage />,
    title: 'English',
  },
  {
    icon: <FaQuestion />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <MdKeyboard />,
    title: 'Keyboard shortcuts',
  },
];

function Header() {
  const [searchAccount, setSearchAccount] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchAccount([]);
    }, 3000);
  }, []);
  return (
    <header className="wrapper h-[60px] w-full shadow-[0_1px_1px_rgba(0,0,0,0.12)] flex justify-center">
      <div className="inner h-full w-[1150px] flex items-center justify-between ">
        <div className="logo">
          <img src={images.logo.default} alt="TikTok" width="118" height="42" />
        </div>
        <Tippy
          interactive
          visible={searchAccount.length > 0}
          render={(attrs) => (
            <div className="search-result w-[500px]" tabIndex={-1} {...attrs}>
              <PopperWrapper>
                <h4 className="search-title font-semibold ml-1 text-sm">Account</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className="search relative w-[500px] h-[46px] border-solid border-[1.5px] border-transparent bg-gray-200 rounded-[92px] pl-4 flex after:content hover:border-gray-400">
            <input
              placeholder="Search"
              spellCheck={false}
              className="text-base border-none outline-none bg-transparent text-black h-full flex-1 caret-pink-400"
            />
            <button className="clear absolute right-[72px] top-[50%] transform -translate-y-1/2 text-gray-400">
              <AiFillCloseCircle />
            </button>
            <button className="loading absolute right-[72px] top-[50%] transform -translate-y-1/2 text-gray-400">
              <AiOutlineLoading3Quarters />
            </button>

            <button className="search-button w-[52px] h-full border-none outline-none justify-center flex items-center rounded-r-full text-3xl text-gray-400 border-[1.5px] border-transparent hover:bg-gray-300 hover:text-black">
              <span className="search-line after:absolute after:content after:block after:w-[1px] after:h-[28px] after:top-[9px] after:right-[52px] after:bg-gray-400"></span>
              <AiOutlineSearch />
            </button>
          </div>
        </Tippy>
        <div className="action flex space-x-2">
          <Button to="/upload" classic leftIcon={<AiOutlinePlus />} onClick={() => {}}>
            Upload
          </Button>
          <Button primary to="/login" onClick={() => {}}>
            Login
          </Button>
          {/* <Button small outline to="/login" onClick={() => {}}>
            small
          </Button>
          <Button large outline to="/login" onClick={() => {}}>
            large
          </Button> */}
          <Menu items={MENU_ITEMS}>
            <button className="more-btn text-4xl py-2">
              <AiOutlineMore />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
