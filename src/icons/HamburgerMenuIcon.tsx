import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export const HamburgerMenuIcon: React.FC<SvgIconProps> = (
  props: SvgIconProps
) => {
  return (
    <SvgIcon {...props} viewBox='8 2 40 40'>
      <path d='M0 0h24v24H0z' />
      <path d='M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z' />
    </SvgIcon>
  );
};
