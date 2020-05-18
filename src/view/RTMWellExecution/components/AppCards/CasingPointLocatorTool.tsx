import React from 'react';
import { useTheme } from '@material-ui/core';
import { AppCardProps, AppCard } from 'components/AppCard/AppCard';
import { NodeConnectIcon } from 'icons/NodeConnectIcon';

export interface CasingPointLocatorToolProps {
  isError: boolean;
  isDisabled: boolean;
  isActive: boolean;
}

const CasingPointLocatorTool: React.FC<CasingPointLocatorToolProps> = (
  props: CasingPointLocatorToolProps
) => {
  const { isError, isDisabled, isActive } = props;

  const theme = useTheme();

  const appCardContents: AppCardProps = {
    domainTitle: 'STANDARDS',
    appTitle: 'Casing point locator tool',
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

export default CasingPointLocatorTool;
