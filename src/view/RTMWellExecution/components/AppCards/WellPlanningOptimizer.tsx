import React from 'react';
import { useTheme } from '@material-ui/core';
import { AppCardProps, AppCard } from 'components/AppCard/AppCard';
import SettingsIcon from '@material-ui/icons/Settings';

export interface WellPlanningOptimizerProps {
  isError: boolean;
  isDisabled: boolean;
  isActive: boolean;
}

const WellPlanningOptimizer: React.FC<WellPlanningOptimizerProps> = (
  props: WellPlanningOptimizerProps
) => {
  const { isError, isDisabled, isActive } = props;

  const theme = useTheme();

  const appCardContents: AppCardProps = {
    domainTitle: 'RTM',
    appTitle: 'Well planning optimizer tool',
    iconColor: theme.palette.icon.RTM,
    cardState: {
      isDisabled,
      isError,
      isActive,
    },
    appIcon: <SettingsIcon />,
  };
  return <AppCard {...appCardContents} />;
};

export default WellPlanningOptimizer;
