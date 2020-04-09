import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export const HomeIcon: React.FC<SvgIconProps> = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox='8 2 40 40'>
      <path d='M19.972 33.289v-7.514h5.009v7.514h6.261V23.271h3.757L22.477 12 9.954 23.271h3.757v10.018z' />
    </SvgIcon>
  );
};
