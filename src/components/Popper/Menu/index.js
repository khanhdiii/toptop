import React from 'react';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';

function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };
  return (
    <Tippy
      delay={[0, 800]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className="menu-list w-[300px] py-2 px-1" tabIndex={-1} {...attrs}>
          <PopperWrapper className="menu-popper py-2">{renderItems()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
