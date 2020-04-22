import React from 'react';
import { AppCardProps, AppCard } from 'components/AppCard/AppCard';
import { RiskIcon } from 'icons/RiskIcon';
import { useTheme } from '@material-ui/core';

export interface RiskProfileBuilderProps {
  isError?: boolean;
  isDisabled?: boolean;
  isActive?: boolean;
}

const RiskProfileBuilder: React.FC<RiskProfileBuilderProps> = (
  props: RiskProfileBuilderProps
) => {
  const { isDisabled, isError, isActive } = props;

  const theme = useTheme();

  const appCardContents: AppCardProps = {
    domainTitle: 'RISK',
    appTitle: 'Risk Profile Builder',
    iconColor: theme.palette.icon.risk,
    cardState: {
      isDisabled,
      isError,
      isActive,
    },
    appIcon: <RiskIcon fontSize='inherit' />,
  };
  return <AppCard {...appCardContents} />;
};

export default RiskProfileBuilder;
