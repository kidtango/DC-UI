import React from 'react';
import { useTheme } from '@material-ui/core';
import { AppCardProps, AppCard } from 'components/AppCard/AppCard';
import { NodeConnectIcon } from 'icons/NodeConnectIcon';

export interface FishingEquipmentToolProps {
  isError: boolean;
  isDisabled: boolean;
  isActive: boolean;
}

const FishingEquipmentTool: React.FC<FishingEquipmentToolProps> = (
  props: FishingEquipmentToolProps
) => {
  const { isError, isDisabled, isActive } = props;

  const theme = useTheme();

  const appCardContents: AppCardProps = {
    domainTitle: 'RTM',
    appTitle: 'Fishing Equipment Tool',
    iconColor: theme.palette.icon.RTM,
    cardState: {
      isDisabled,
      isError,
      isActive,
    },
    appIcon: <NodeConnectIcon />,
  };
  return <AppCard {...appCardContents} />;
};

export default FishingEquipmentTool;
