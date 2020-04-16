import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export const IconHelpOutline: React.FC<SvgIconProps> = (
  props: SvgIconProps
) => {
  return (
    <SvgIcon {...props} viewBox='0 0 40 40'>
      <path d='M11 18h2v-2h-2zm1-16a10 10 0 1010 10A10.029 10.029 0 0012 2zm0 18a8 8 0 118-8 8.024 8.024 0 01-8 8zm0-14a4.012 4.012 0 00-4 4h2a2 2 0 014 0c0 2-3 1.8-3 5h2c0-2.3 3-2.5 3-5a4.012 4.012 0 00-4-4z' />
    </SvgIcon>
  );
};
