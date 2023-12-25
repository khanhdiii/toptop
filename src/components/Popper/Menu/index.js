import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((pre) => [...pre, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      delay={[0, 600]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className="menu-list w-[300px] py-2 px-1" tabIndex={-1} {...attrs}>
          <PopperWrapper className="menu-popper py-2">
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((pre) => pre.slice(0, pre.length - 1));
                }}
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHide={() => {
        setHistory((pre) => pre.slice(0, 1));
      }}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
