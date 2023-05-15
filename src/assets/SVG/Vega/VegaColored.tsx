import * as React from 'react';
const VegaColored = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={126}
    height={50}
    viewBox='0 0 58 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}>
    <g clipPath='url(#clip0_138_354)'>
      <path d='M50 0H34V16H57.48' fill='#FBC02D' />
      <path d='M17 48H33L16 0H0L17 48Z' fill='#0692F2' />
      <path d='M33 48H17L34 0H50L33 48Z' fill='#2450B2' />
      <path opacity={0.3} d='M17 48L25 25.41L23.87 22.22L17 48Z' fill='black' />
      <path
        opacity={0.3}
        d='M46.4401 16H44.3301L50.0001 0.0800171'
        fill='black'
      />
    </g>
    <defs>
      <clipPath id='clip0_138_354'>
        <rect width={57.48} height={48} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
export default VegaColored;
