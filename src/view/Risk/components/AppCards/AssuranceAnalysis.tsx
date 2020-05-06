import React from 'react';
import { useTheme } from '@material-ui/core';
import GridOnIcon from '@material-ui/icons/GridOn';
import { AppCard, AppCardProps } from 'components/AppCard/AppCard';
import { NodeConnectIcon } from 'icons/NodeConnectIcon';

export interface AssuranceAnalysisProps {
  isError?: boolean;
  isDisabled?: boolean;
  isActive?: boolean;
}

const AssuranceAnalysis = (props: AssuranceAnalysisProps) => {
  const { isDisabled, isError, isActive } = props;

  const theme = useTheme();

  const appCardContents: AppCardProps = {
    domainTitle: 'RISK',
    appTitle: 'Assurance Analysis',
    iconColor: theme.palette.icon.risk,
    cardState: {
      isDisabled,
      isError,
      isActive,
    },
    appIcon: <NodeConnectIcon />,
  };

  return <AppCard {...appCardContents} />;
};

export default AssuranceAnalysis;
