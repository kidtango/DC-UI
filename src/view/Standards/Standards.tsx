import React from 'react';
import { StandardsDasbboard } from './components';
import { StandardsContextProvider } from './contexts';

interface Props {}

const Standards = (props: Props) => {
  return (
    <StandardsContextProvider>
      <StandardsDasbboard />
    </StandardsContextProvider>
  );
};

export default Standards;
