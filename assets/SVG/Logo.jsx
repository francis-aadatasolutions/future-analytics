import * as React from 'react';

const Logo = (props) => (
  <svg
    width={40}
    height={40}
    viewBox='0 0 40 85'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}>
    <g clipPath='url(#clip0_708_2)'>
      <path
        d='M0 42.1669V64.464L13.5463 53.5886L13.819 41.2825L40 18.7439V0L32.7393 6.25485L7.18029 27.4706C2.71021 31.3237 0.120461 36.6091 0 42.1669Z'
        fill='#008BD1'
      />
      <path
        d='M12.8467 85.0001L26.2874 72.5458L26.5576 60.2401L39.9984 49.5503V30.812L13.5542 53.5824V53.588H13.5488L12.8467 85.0001Z'
        fill='#008BD1'
      />
    </g>
    <defs>
      <clipPath id='clip0_708_2'>
        <rect width={40} height={85} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

export default Logo;
