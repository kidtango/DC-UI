import React from 'react';
import { useTheme } from '@material-ui/core';
import { AppCardProps, AppCard } from 'components/AppCard/AppCard';
import SettingsIcon from '@material-ui/icons/Settings';

export interface WellEfficiencyPlannerProps {
  isError: boolean;
  isDisabled: boolean;
  isActive: boolean;
}

const WellEfficiencyPlanner: React.FC<WellEfficiencyPlannerProps> = (
  props: WellEfficiencyPlannerProps
) => {
  const { isError, isDisabled, isActive } = props;

  const theme = useTheme();

  const appCardContents: AppCardProps = {
    domainTitle: 'RIG ALLOCATION',
    appTitle: 'Well Efficiency and Cost Planner',
    iconColor: theme.palette.icon.rigAllocation,
    cardState: {
      isDisabled,
      isError,
      isActive,
    },
    appIcon: <SettingsIcon />,
  };
  return <AppCard {...appCardContents} />;
};

export default WellEfficiencyPlanner;
