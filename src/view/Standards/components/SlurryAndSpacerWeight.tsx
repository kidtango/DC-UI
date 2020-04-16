import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import { StandardsIcon } from 'icons/StandardsIcon';
import { AppCardProps, AppCard } from 'components/AppCard/AppCard';

export interface SlurryAndSpacerWeightProps {
  isError: boolean;
  isDisabled: boolean;
}

const SlurryAndSpacerWeight: React.FC<SlurryAndSpacerWeightProps> = (
  props: SlurryAndSpacerWeightProps
) => {
  const { isDisabled, isError } = props;
  const classes = useStyles(props);

  const appCardContents: AppCardProps = {
    domainTitle: 'STANDARDS',
    appTitle: 'Slurry and spacer weight',
    cardState: {
      isDisabled,
      isError,
    },
    appIcon: (
      <StandardsIcon fontSize='inherit' className={classes.domainIcon} />
    ),
  };
  return <AppCard {...appCardContents} />;
};

const useStyles = makeStyles((theme: Theme) => ({
  headerIcon: { height: '60px', width: '60px', color: '#009DD9' },
  domainIcon: {
    width: 60,
    height: 60,
    marginLeft: -10,
    color: (props: SlurryAndSpacerWeightProps) => {
      return props.isDisabled
        ? theme.palette.text.disabled
        : theme.palette.text.primary;
    },
  },
}));

export default SlurryAndSpacerWeight;
