import React from 'react';
import { useTheme } from '@material-ui/core';
import { AppCardProps, AppCard } from 'components/AppCard/AppCard';
import GridOnIcon from '@material-ui/icons/GridOn';

export interface RigTypesHESProps {
  isError: boolean;
  isDisabled: boolean;
  isActive: boolean;
}

const RigTypesHES: React.FC<RigTypesHESProps> = (props: RigTypesHESProps) => {
  const { isError, isDisabled, isActive } = props;

  const theme = useTheme();

  const appCardContents: AppCardProps = {
    domainTitle: 'RIG ALLOCATION',
    appTitle: 'Rig Types Score and Crew Performance',
    iconColor: theme.palette.icon.rigAllocation,
    cardState: {
      isDisabled,
      isError,
      isActive,
    },
    appIcon: <GridOnIcon />,
  };
  return <AppCard {...appCardContents} />;
};

export default RigTypesHES;
