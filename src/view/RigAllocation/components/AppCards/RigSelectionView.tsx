import React from 'react';
import { useTheme } from '@material-ui/core';
import { AppCardProps, AppCard } from 'components/AppCard/AppCard';
import { RigAllocationIcon } from 'icons/RigAllocationIcon';
import useRigAllocationContext from 'view/RigAllocation/contexts';

const rigSelectionViewPrompt =
  'Enter required fields of depth and pressure + height and distance to generate a list of available rigs suited for your operations';

const initialPrompt =
  'Select an application below to assist in your rig selection';

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
  const {
    setDecisionBoxContent,
    rigSelectionView,
    setRigSelectionView,
  } = useRigAllocationContext();

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

  const handleClick = () => {
    setRigSelectionView!((prevState) => ({
      ...prevState,
      isActive: !isActive,
    }));
    setDecisionBoxContent!(rigSelectionViewPrompt);
    if (rigSelectionView?.isActive) {
      setDecisionBoxContent!(initialPrompt);
    }
  };

  return (
    <div onClick={handleClick}>
      <AppCard {...appCardContents} />
    </div>
  );
};

export default RigSelectionView;
