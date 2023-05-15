import * as React from 'react';
const VegaGray = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={126}
    height={50}
    viewBox='0 0 58 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}>
    <g clipPath='url(#clip0_138_316)'>
      <g opacity={0.5}>
        <path d='M50 0H34V16H57.48' fill='#999999' />
        <path d='M17 48H33L16 0H0L17 48Z' fill='#999999' />
        <path d='M33 48H17L34 0H50L33 48Z' fill='#999999' />
        <path
          opacity={0.3}
          d='M17 48L25 25.41L23.87 22.22L17 48Z'
          fill='#999999'
        />
        <path
          opacity={0.3}
          d='M46.4401 16H44.3301L50.0001 0.0800171'
          fill='#999999'
        />
      </g>
    </g>
    <defs>
      <clipPath id='clip0_138_316'>
        <rect width={57.48} height={48} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
export default VegaGray;
