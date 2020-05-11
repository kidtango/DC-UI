import React from 'react';
import { useTheme } from '@material-ui/core';
import { AppCardProps, AppCard } from 'components/AppCard/AppCard';
import { NodeConnectIcon } from 'icons/NodeConnectIcon';

export interface RigDowntimeEstimatorProps {
  isError: boolean;
  isDisabled: boolean;
  isActive: boolean;
}

const RigDowntimeEstimator: React.FC<RigDowntimeEstimatorProps> = (
  props: RigDowntimeEstimatorProps
) => {
  const { isError, isDisabled, isActive } = props;

  const theme = useTheme();

  const appCardContents: AppCardProps = {
    domainTitle: 'RIG ALLOCATION',
    appTitle: 'Rig Downtime Estimator',
    iconColor: theme.palette.icon.rigAllocation,
    cardState: {
      isDisabled,
      isError,
      isActive,
    },
    appIcon: <NodeConnectIcon fontSize='inherit' />,
  };
  return <AppCard {...appCardContents} />;
};

export default RigDowntimeEstimator;
