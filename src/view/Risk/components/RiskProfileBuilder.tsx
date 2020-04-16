import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import { AppCardProps, AppCard } from 'components/AppCard/AppCard';
import { RiskIcon } from 'icons/RiskIcon';

export interface RiskProfileBuilderProps {
  isError: boolean;
  isDisabled: boolean;
}

const RiskProfileBuilder: React.FC<RiskProfileBuilderProps> = (
  props: RiskProfileBuilderProps
) => {
  const { isDisabled, isError } = props;
  const classes = useStyles(props);

  const appCardContents: AppCardProps = {
    domainTitle: 'RISK',
    appTitle: 'Risk Profile Builder',
    cardState: {
      isDisabled,
      isError,
    },
    appIcon: <RiskIcon fontSize='inherit' className={classes.domainIcon} />,
  };
  return <AppCard {...appCardContents} />;
};

const useStyles = makeStyles((theme: Theme) => ({
  headerIcon: { height: '60px', width: '60px', color: '#009DD9' },
  domainIcon: {
    width: 60,
    height: 60,
    marginLeft: -10,
    color: (props: RiskProfileBuilderProps) => {
      if (props.isError) {
        return theme.palette.icon.error;
      }

      if (props.isDisabled) {
        return theme.palette.icon.inActive;
      }

      return theme.palette.icon.active;
    },
  },
}));

export default RiskProfileBuilder;
