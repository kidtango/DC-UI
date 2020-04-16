import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export const ProgressArrowIcon: React.FC<SvgIconProps> = (
  props: SvgIconProps
) => {
  return (
    <SvgIcon {...props} viewBox='0 0 24 20'>
      <defs />
      <path d='M9.09 12.59L10.5 14l5-5-5-5-1.41 1.41L11.67 8H4v2h7.67zM4 18a2 2 0 002-2v-4H4zM4 6h2V2a2 2 0 00-2-2z' />
    </SvgIcon>
  );
};
