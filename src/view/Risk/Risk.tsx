import React from 'react';

import { RiskContextsProvider } from './contexts/RiskContexts';
import { RiskDashboard } from './RiskDashboard';

// Entry point for Risk Application Suite
export const Risk: React.FC = () => {
  return (
    <RiskContextsProvider>
      <RiskDashboard />
    </RiskContextsProvider>
  );
};
