import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export const RiskIcon: React.FC<SvgIconProps> = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox='0 0 40 40'>
      <path d='M32.068 10.173H26.3a4.121 4.121 0 00-7.779 0h-5.763A2.767 2.767 0 0010 12.932v19.309a2.767 2.767 0 002.758 2.758h19.31a2.767 2.767 0 002.758-2.758V12.932a2.767 2.767 0 00-2.758-2.759zm-8.276 20.689h-2.758v-2.758h2.758zm0-5.517h-2.758V17.07h2.758zm-1.379-12.413a1.379 1.379 0 111.379-1.379 1.383 1.383 0 01-1.379 1.379z' />
    </SvgIcon>
  );
};
