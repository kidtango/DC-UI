import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export const RTMIcon: React.FC<SvgIconProps> = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox='0 0 40 40'>
      <path d='M22.306 18.622l-5.238-5.238-1.746 1.746 6.984 6.984L34.499 9.877l-1.746-1.749z' />
      <path d='M27.534 21.247a4.983 4.983 0 01-9.845 1.069l-2.524-2.26a7.481 7.481 0 1014.544-.98z' />
      <path d='M31.641 17.142a9.973 9.973 0 11-19.071 4.08 9.882 9.882 0 01.5-3.047l-2.014-1.8a12.472 12.472 0 1023.964 4.847 12.351 12.351 0 00-1.525-5.933z' />
    </SvgIcon>
  );
};
