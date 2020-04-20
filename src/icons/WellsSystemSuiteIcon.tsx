import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export const WellsSystemSuiteIcon: React.FC<SvgIconProps> = (
  props: SvgIconProps
) => {
  return (
    <SvgIcon {...props} viewBox='4 0 40 40'>
      <path d='M22.5 10A12.5 12.5 0 1035 22.5 12.537 12.537 0 0022.5 10zm0 22.5a10 10 0 1110-10 10.029 10.029 0 01-10 10z' />
      <path d='M30.281 20.603l-4.5-5.25a.6.6 0 00-.875 0c-.125 0-.125.125-.25.25l-2 4.375a4.8 4.8 0 012.75 3.25l4.625-1.375a.838.838 0 00.375-1c0-.12 0-.12-.125-.25z' />
      <path d='M30.281 20.603l-4.5-5.25a.6.6 0 00-.875 0c-.125 0-.125.125-.25.25l-.625 1.25 4.5 5.25 1.375-.37a.631.631 0 00.5-.875c0-.125 0-.125-.125-.255zM25.424 23.187c-.006-.028-.011-.056-.019-.084h-.014c.01.031.026.056.033.084zM25.431 23.215l-3.65 1.012a.559.559 0 01-.726-.09.565.565 0 01-.024-.784l1.576-3.395a4.923 4.923 0 00-2.2-.48 5.25 5.25 0 105.25 5.25 5.976 5.976 0 00-.226-1.513z' />
    </SvgIcon>
  );
};
