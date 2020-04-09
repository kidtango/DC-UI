import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export const StandardsIcon: React.FC<SvgIconProps> = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox='8 2 40 40'>
      <path d='M17.952 15.293h9.124c.006-.1.017-.191.017-.283q0-.748-.005-1.5a1.359 1.359 0 011.439-1.508q2.538-.013 5.079 0a1.309 1.309 0 011.385 1.4c.008 2.737.005 5.473.006 8.21v8.063a1.707 1.707 0 01-.232 1.035 1.422 1.422 0 01-1.3.567H11.526a1.35 1.35 0 01-1.486-1.032 3.732 3.732 0 01-.043-.758v-11.2q0-2.39-.006-4.779a1.338 1.338 0 011.461-1.5q2.511-.01 5.021 0a1.325 1.325 0 011.423 1.428c.012.605.012 1.211.017 1.816a.14.14 0 01.039.041zm13.1 8.009a3.3 3.3 0 00-3.188-3.321 3.318 3.318 0 00-3.388 3.216 3.3 3.3 0 003.254 3.443 3.29 3.29 0 003.32-3.339zM17.26 19.984a3.3 3.3 0 00-3.315 3.348 3.333 3.333 0 003.265 3.321 3.34 3.34 0 003.321-3.27 3.321 3.321 0 00-3.273-3.399z' />
    </SvgIcon>
  );
};
