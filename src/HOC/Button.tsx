import Link from 'next/link';
import React from 'react';

import { IconType } from 'react-icons/lib';

type Btn = {
  url: string;
  text: string;
  className?: string;
  Icon?: IconType;
};

const BtnLink = ({ url, text, className, Icon }: Btn) => {
  return (
    <Link
      href={url}
      className={
        className
          ? `${className} duration-500 hover:scale-105 flex items-center gap-2 w-fit`
          : 'p-3 text-white bg-secondary rounded-lg duration-500 hover:scale-105 flex items-center gap-2 w-fit'
      }>
      {Icon ? (
        <div>
          <Icon className='text-2xl' />
        </div>
      ) : null}
      {text}
    </Link>
  );
};

export default BtnLink;
