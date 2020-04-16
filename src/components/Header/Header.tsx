import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { ChevronLogo } from 'icons/ChevronLogo';

export interface HeaderProps {
  title: string;
  subTitle: string;
  icon: React.ReactChild;
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { title, subTitle, icon } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        wrap='nowrap'
        spacing={1}
        direction='row'
        alignItems='center'
      >
        <Grid item>{icon}</Grid>
        <Grid item className={classes.appTitle}>
          <Typography variant='h2'>{subTitle}</Typography>
          <Typography variant='h1'>{title}</Typography>
        </Grid>
        <Grid item>
          <ChevronLogo fontSize='inherit' className={classes.chevronLogo} />
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  appTitle: { marginRight: 'auto' },
  chevronLogo: { height: '80px', width: '75px' },
}));
