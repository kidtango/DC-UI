import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export const HamburgerMenuIcon: React.FC<SvgIconProps> = (
  props: SvgIconProps
) => {
  return (
    <SvgIcon {...props}>
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z' />

      <path d='M33.729 15.74h.386v12h-.225V16.299h-.161z' />
    </SvgIcon>
  );
};
