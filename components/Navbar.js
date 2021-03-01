import Link from 'next/link';

import React from 'react';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-10 '>
      <h1 className='m-4 text-lg text-pink-600'>Daily Capital</h1>
      <div className=''>
        <Link href='/'>
          <a className='m-4 text-sm text-gray-100'>Home</a>
        </Link>
        <Link href='/feed/1'>
          <a className='m-4 text-sm text-gray-100'>Feed</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
