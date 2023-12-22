import React from 'react';
import Button from '~/components/Button';

function MenuItem({ data, onClick }) {
  return (
    <Button className="py-[6px]" leftIcon={data.icon} to={data.to} onClick={onClick}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
