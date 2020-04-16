import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { AppCardProps, AppCard } from 'components/AppCard/AppCard';

export interface CasingWearLimitProps {
  isError: boolean;
  isDisabled: boolean;
}

const CasingWearLimit: React.FC<CasingWearLimitProps> = (
  props: CasingWearLimitProps
) => {
  const { isError, isDisabled } = props;
  const classes = useStyles(props);

  const appCardContents: AppCardProps = {
    domainTitle: 'STANDARDS',
    appTitle: 'Casing wear limit tool',
    cardState: {
      isError,
      isDisabled,
    },
    appIcon: <SettingsIcon fontSize='inherit' className={classes.domainIcon} />,
  };
  return <AppCard {...appCardContents} />;
};

const useStyles = makeStyles((theme: Theme) => ({
  headerIcon: { height: '60px', width: '60px', color: '#009DD9' },
  domainIcon: {
    width: 60,
    height: 60,
    marginLeft: -10,
    color: (props: CasingWearLimitProps) => {
      return props.isDisabled
        ? theme.palette.text.disabled
        : theme.palette.text.primary;
    },
  },
}));

export default CasingWearLimit;
