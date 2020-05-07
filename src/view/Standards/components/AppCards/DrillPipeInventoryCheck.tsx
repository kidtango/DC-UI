import React from 'react';
import { useTheme } from '@material-ui/core';
import GridOnIcon from '@material-ui/icons/GridOn';
import { AppCardProps, AppCard } from 'components/AppCard/AppCard';

export interface DrillPipeInventoryCheckProps {
  isError: boolean;
  isDisabled: boolean;
  isActive: boolean;
}

const DrillPipeInventoryCheck: React.FC<DrillPipeInventoryCheckProps> = (
  props: DrillPipeInventoryCheckProps
) => {
  const { isDisabled, isError, isActive } = props;
  const theme = useTheme();

  const appCardContents: AppCardProps = {
    domainTitle: 'STANDARDS',
    appTitle: 'Drill Pipe Inventory Check',
    iconColor: theme.palette.icon.standards,
    cardState: {
      isDisabled,
      isError,
      isActive,
    },
    appIcon: <GridOnIcon />,
  };
  return <AppCard {...appCardContents} />;
};

export default DrillPipeInventoryCheck;
