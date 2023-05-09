import Link from 'next/link';
import React from 'react';

const BtnLink = ({ url, text }: { url: string; text: string }) => {
  return (
    <ul>
      <li>
        <Link href={url} className='p-3 text-white bg-primary rounded-lg'>
          {text}
        </Link>
      </li>
    </ul>
  );
};

export default BtnLink;
