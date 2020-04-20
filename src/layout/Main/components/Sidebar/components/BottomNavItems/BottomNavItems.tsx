import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

export const BottomNavItems = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Tooltip
        title='Help'
        placement='right'
        arrow
        classes={{ tooltip: classes.label }}
      >
        <IconButton className={classes.button}>
          <HelpOutlineIcon fontSize='inherit' />
        </IconButton>
      </Tooltip>
      <Tooltip
        title='Settings'
        placement='right'
        arrow
        classes={{ tooltip: classes.label }}
      >
        <IconButton className={classes.button}>
          <SettingsIcon fontSize='inherit' />
        </IconButton>
      </Tooltip>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    fontSize: 15,
  },
  button: {
    marginBottom: theme.spacing(1),
    borderRadius: '100%',

    '& svg': {
      color: theme.palette.primary.main,
      '&:hover': {
        color: '#009DD9',
      },
    },
  },
  label: { fontSize: 16 },
}));
