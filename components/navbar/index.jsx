import Link from 'next/link';
import React, { useState } from 'react';

import { NavbarLinks } from '@/assets/NavbarLinks';

function Navbar() {
  return (
    <>
      <div className='hidden md:block'>
        <div className='flex gap-16'>
          {NavbarLinks.map((links) => {
            const { id, name, link, icon, textSize } = links;
            return (
              <Link href={link} key={id} className='hover:text-[#4ec1fa]'>
                <p className='text-xl'>{name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navbar;
