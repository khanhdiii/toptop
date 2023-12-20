import React from 'react';
import Button from '~/components/Button';

function MenuItem({ data }) {
  return (
    <Button className="py-[6px]" leftIcon={data.icon} to={data.to}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
