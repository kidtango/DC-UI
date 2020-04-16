import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export const AppConnectorIcon: React.FC<SvgIconProps> = (
  props: SvgIconProps
) => {
  return (
    <SvgIcon
      {...props}
      viewBox='0 0 24 20'
      style={{ padding: '0px 0px 0px 0px' }}
    >
      <path d='M2.62 4a2.006 2.006 0 002 2h4V4zM18.62 6a2.006 2.006 0 002-2h-6v2zM12.62 4h-2v11.494h2V4zM18.62 13.494h-4v2h6a2.006 2.006 0 00-2-2zM4.62 13.494a2.006 2.006 0 00-2 2h6v-2z' />
      <path d='M24 4.62v14.76H0V4.62z' fill='none' />
    </SvgIcon>
  );
};
