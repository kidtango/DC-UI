import React from 'react';
import { useTheme } from '@material-ui/core';
import { AppCardProps, AppCard } from 'components/AppCard/AppCard';
import GridOnIcon from '@material-ui/icons/GridOn';

export interface DrillPipeConnectorBHAProps {
  isError: boolean;
  isDisabled: boolean;
  isActive: boolean;
}

const DrillPipeConnectorsBHA: React.FC<DrillPipeConnectorBHAProps> = (
  props: DrillPipeConnectorBHAProps
) => {
  const { isError, isDisabled, isActive } = props;

  const theme = useTheme();

  const appCardContents: AppCardProps = {
    domainTitle: 'RTM',
    appTitle: 'Drill pipe connectors & BHA',
    iconColor: theme.palette.icon.RTM,
    cardState: {
      isDisabled,
      isError,
      isActive,
    },
    appIcon: <GridOnIcon />,
  };
  return <AppCard {...appCardContents} />;
};

export default DrillPipeConnectorsBHA;
