import React from 'react';
import { useTheme } from '@material-ui/core';
import GridOnIcon from '@material-ui/icons/GridOn';
import { AppCard, AppCardProps } from 'components/AppCard/AppCard';

export interface SafeguardEvalAssessmentProps {
  isError?: boolean;
  isDisabled?: boolean;
  isActive?: boolean;
}

const SafeguardEvalAssessment = (props: SafeguardEvalAssessmentProps) => {
  const { isDisabled, isError, isActive } = props;

  const theme = useTheme();

  const appCardContents: AppCardProps = {
    domainTitle: 'RISK',
    appTitle: 'Safeguard Evaluation & Assessment',
    iconColor: theme.palette.icon.risk,
    cardState: {
      isDisabled,
      isError,
      isActive,
    },
    appIcon: <GridOnIcon />,
  };

  return <AppCard {...appCardContents} />;
};

export default SafeguardEvalAssessment;
