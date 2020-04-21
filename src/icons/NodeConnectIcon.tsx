import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export const NodeConnectIcon: React.FC<SvgIconProps> = (
  props: SvgIconProps
) => {
  return (
    <SvgIcon {...props} viewBox='-2 0 50 32'>
      >
      <path d='M13.251 4.42h15.362v4.427H13.257c0 1.1 0 2.151.006 3.205a.774.774 0 00.139.326q1.957 3.452 3.918 6.9c.1.173.194.346.319.57a4.514 4.514 0 00-3.781 2.2c-.271-.458-.528-.881-.774-1.311q-2.067-3.6-4.124-7.207a.484.484 0 00-.5-.285q-3 .016-5.993 0a2.454 2.454 0 01-1.582-.463 2.3 2.3 0 01-.88-1.933c0-2.843-.011-5.686.006-8.529A2.178 2.178 0 012.334.004q4.263-.026 8.527 0a2.257 2.257 0 012.39 2.435c.006.647 0 1.289 0 1.981zM37.406 13.257c-1.408 0-2.816.01-4.224 0a2.23 2.23 0 01-2.358-2.381c-.01-2.8-.006-5.606-.009-8.409A2.194 2.194 0 0132.027.285a2.9 2.9 0 011.2-.26c2.8-.023 5.6-.006 8.408-.018a2.261 2.261 0 012.328 1.6 3.526 3.526 0 01.107.873c.007 2.79-.013 5.58.008 8.369a2.236 2.236 0 01-1.609 2.313 4.5 4.5 0 01-.956.1c-1.368.011-2.736 0-4.1 0zM22.001 35.246c-1.528 0-3.055.021-4.582-.007a2.076 2.076 0 01-1.977-2.041q-.019-4.543-.008-9.087a2.223 2.223 0 012.035-2.071q4.522-.012 9.045.007a2.13 2.13 0 012.119 2.125q.02 4.523.007 9.046a2.14 2.14 0 01-1.936 2.017c-1.567.033-3.135.009-4.7.009z' />
    </SvgIcon>
  );
};
