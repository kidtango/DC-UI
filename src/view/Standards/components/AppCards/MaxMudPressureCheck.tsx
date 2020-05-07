import React from 'react';
import { useTheme } from '@material-ui/core';
import { AppCardProps, AppCard } from 'components/AppCard/AppCard';
import SettingsIcon from '@material-ui/icons/Settings';

export interface MaxMudPressureCheckProps {
  isError: boolean;
  isDisabled: boolean;
  isActive: boolean;
}

const MaxMudPressureCheck: React.FC<MaxMudPressureCheckProps> = (
  props: MaxMudPressureCheckProps
) => {
  const { isError, isDisabled, isActive } = props;

  const theme = useTheme();

  const appCardContents: AppCardProps = {
    domainTitle: 'STANDARDS',
    appTitle: 'Maximum Mud Pressure Check',
    iconColor: theme.palette.icon.standards,
    cardState: {
      isDisabled,
      isError,
      isActive,
    },
    appIcon: <SettingsIcon />,
  };
  return <AppCard {...appCardContents} />;
};

export default MaxMudPressureCheck;
