import React from 'react';
import { useTheme } from '@material-ui/core';
import { AppCardProps, AppCard } from 'components/AppCard/AppCard';
import { NodeConnectIcon } from 'icons/NodeConnectIcon';

export interface AnnularHydraulicFluidsCalcProps {
  isError: boolean;
  isDisabled: boolean;
  isActive: boolean;
}

const AnnularHydraulicFluidsCalc: React.FC<AnnularHydraulicFluidsCalcProps> = (
  props: AnnularHydraulicFluidsCalcProps
) => {
  const { isError, isDisabled, isActive } = props;

  const theme = useTheme();

  const appCardContents: AppCardProps = {
    domainTitle: 'STANDARDS',
    appTitle: 'Annual Hydraulic Fluids Calculator',
    iconColor: theme.palette.icon.standards,
    cardState: {
      isDisabled,
      isError,
      isActive,
    },
    appIcon: <NodeConnectIcon />,
  };
  return <AppCard {...appCardContents} />;
};

export default AnnularHydraulicFluidsCalc;
