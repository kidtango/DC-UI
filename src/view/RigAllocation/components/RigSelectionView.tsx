import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import { AppCardProps, AppCard } from 'components/AppCard/AppCard';
import { RigAllocationIcon } from 'icons/RigAllocationIcon';

export interface RigSelectionProps {
  isError: boolean;
  isDisabled: boolean;
}

const RigSelectionView: React.FC<RigSelectionProps> = (
  props: RigSelectionProps
) => {
  const { isError, isDisabled } = props;

  const classes = useStyles(props);

  const appCardContents: AppCardProps = {
    domainTitle: 'RIG ALLOCATION',
    appTitle: 'Rig selection view',
    cardState: {
      isDisabled,
      isError,
    },
    appIcon: (
      <RigAllocationIcon fontSize='inherit' className={classes.domainIcon} />
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
    color: (props: RigSelectionProps) => {
      return props.isDisabled
        ? theme.palette.text.disabled
        : theme.palette.text.primary;
    },
  },
}));

export default RigSelectionView;
