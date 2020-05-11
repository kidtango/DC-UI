import React from 'react';
import { useTheme } from '@material-ui/core';
import { AppCardProps, AppCard } from 'components/AppCard/AppCard';
import SettingsIcon from '@material-ui/icons/Settings';
import { StandardsIcon } from 'icons/StandardsIcon';

export interface RigTimeCostOptimizerProps {
  isError: boolean;
  isDisabled: boolean;
  isActive: boolean;
}

const RigTimeCostOptimizer: React.FC<RigTimeCostOptimizerProps> = (
  props: RigTimeCostOptimizerProps
) => {
  const { isError, isDisabled, isActive } = props;

  const theme = useTheme();

  const appCardContents: AppCardProps = {
    domainTitle: 'RIG ALLOCATION',
    appTitle: 'Rig Time and Cost Optimizer',
    iconColor: theme.palette.icon.rigAllocation,
    cardState: {
      isDisabled,
      isError,
      isActive,
    },
    appIcon: <StandardsIcon fontSize='inherit' />,
  };
  return <AppCard {...appCardContents} />;
};

export default RigTimeCostOptimizer;
