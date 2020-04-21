import React from 'react';
import { useTheme } from '@material-ui/core';
import { AppCardProps, AppCard } from 'components/AppCard/AppCard';
import { RTMIcon } from 'icons/RTMIcon';

export interface RigSelectionProps {
  isError: boolean;
  isDisabled: boolean;
  isActive: boolean;
}

const PipeTallyGenerator: React.FC<RigSelectionProps> = (
  props: RigSelectionProps
) => {
  const { isError, isDisabled, isActive } = props;

  const theme = useTheme();

  const appCardContents: AppCardProps = {
    domainTitle: 'RTM',
    appTitle: 'Pipe tally generator',
    iconColor: theme.palette.icon.RTM,
    cardState: {
      isDisabled,
      isError,
      isActive,
    },
    appIcon: <RTMIcon fontSize='inherit' />,
  };
  return <AppCard {...appCardContents} />;
};

export default PipeTallyGenerator;
