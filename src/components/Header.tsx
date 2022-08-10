import React from 'react';

type componentProps = {
  title: string;
};

function Header({ title }: componentProps) {
  return (
    <>
      <h1 className='p-3 text-4xl font-bold'>{title}</h1>
    </>
  );
}

export default Header;
