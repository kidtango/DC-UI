import React from 'react';
import { useTheme } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { AppCard, AppCardProps } from 'components/AppCard/AppCard';

export interface RiskSafeguardDefinitionsModelsProps {
  isError?: boolean;
  isDisabled?: boolean;
  isActive?: boolean;
}

const RiskSafeguardDefinitionsModels = (
  props: RiskSafeguardDefinitionsModelsProps
) => {
  const { isDisabled, isError, isActive } = props;

  const theme = useTheme();

  const appCardContents: AppCardProps = {
    domainTitle: 'RISK',
    appTitle: 'Risk & Safeguard Definitions & Models',
    iconColor: theme.palette.icon.risk,
    cardState: {
      isDisabled,
      isError,
      isActive,
    },
    appIcon: <SettingsIcon />,
  };

  return <AppCard {...appCardContents} />;
};

export default RiskSafeguardDefinitionsModels;
