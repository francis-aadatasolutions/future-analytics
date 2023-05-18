import * as React from 'react';
const GrayCube = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={126}
    height={50}
    viewBox='0 0 159 50'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}>
    <rect opacity={0.5} width={158.065} height={50} fill='url(#pattern0)' />
    <defs>
      <pattern
        id='pattern0'
        patternContentUnits='objectBoundingBox'
        width={1}
        height={1}>
        <use
          xlinkHref='#image0_134_257'
          transform='scale(0.00255102 0.00806452)'
        />
      </pattern>
      <image
        id='image0_134_257'
        width={392}
        height={124}
        xlinkHref='data:image/png;base64,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'
      />
    </defs>
  </svg>
);
export default GrayCube;