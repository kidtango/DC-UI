import React from 'react';
import { useTheme } from '@material-ui/core';
import { AppCardProps, AppCard } from 'components/AppCard/AppCard';
import { RigAllocationIcon } from 'icons/RigAllocationIcon';

export interface RigSelectionProps {
  isError: boolean;
  isDisabled: boolean;
  isActive: boolean;
}

const RigSelectionView: React.FC<RigSelectionProps> = (
  props: RigSelectionProps
) => {
  const { isError, isDisabled, isActive } = props;

  const theme = useTheme();

  const appCardContents: AppCardProps = {
    domainTitle: 'RIG ALLOCATION',
    appTitle: 'Rig selection view',
    iconColor: theme.palette.icon.rigAllocation,
    cardState: {
      isDisabled,
      isError,
      isActive,
    },
    appIcon: <RigAllocationIcon fontSize='inherit' />,
  };
  return <AppCard {...appCardContents} />;
};

export default RigSelectionView;
