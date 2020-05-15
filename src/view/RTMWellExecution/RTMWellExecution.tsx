import React from 'react';
import { RTMDashboard } from './components';
import RTMContextProvider from './contexts';

const RTMWellExecution = () => {
  return (
    <RTMContextProvider>
      <RTMDashboard />
    </RTMContextProvider>
  );
};

export default RTMWellExecution;
