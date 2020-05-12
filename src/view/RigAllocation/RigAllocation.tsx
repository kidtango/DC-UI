import React from 'react';
import { RigAllocationDashboard } from './components';
import { RigAllocationContextProvider } from './contexts';

// Main Entry point for Rig Allocation app
export const RigAllocation = () => {
  return (
    <RigAllocationContextProvider>
      <RigAllocationDashboard />
    </RigAllocationContextProvider>
  );
};
