import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export const EarthIcon: React.FC<SvgIconProps> = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox='4 0 40 40'>
      <path d='M26.19,2a24.19,24.19,0,1,0,24.19,24.19A24.2,24.2,0,0,0,26.19,2ZM23.771,45.373A19.324,19.324,0,0,1,6.838,26.19a19.637,19.637,0,0,1,.508-4.33L18.933,33.447v2.419A4.852,4.852,0,0,0,23.771,40.7Zm16.691-6.144a4.8,4.8,0,0,0-4.6-3.362H33.447V28.609a2.426,2.426,0,0,0-2.419-2.419H16.514V21.352h4.838a2.426,2.426,0,0,0,2.419-2.419V14.1h4.838a4.852,4.852,0,0,0,4.838-4.838V8.265a19.309,19.309,0,0,1,7.015,30.964Z' />
    </SvgIcon>
  );
};
