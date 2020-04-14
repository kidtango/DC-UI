import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import DrillingAndCompletion from 'view/DrillingAndCompletion';
import { DrillAndCompletionIcon } from 'icons/DrillAndCompletionIcon';
import { ChevronLogo } from 'icons/ChevronLogo';

interface Props {
  headerContent: {
    title: string;
    subTitle: string;
    icon: React.ReactChild;
  };
}

export const Header: React.FC<Props> = (props: Props) => {
  const { title, subTitle, icon } = props.headerContent;
  console.log('icon', icon);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container wrap='nowrap' spacing={1}>
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
  icon: { height: '39px', width: '39px', color: '#009DD9' },
  appTitle: { marginRight: 'auto' },
  chevronLogo: { height: '50px', width: '45px' },
}));
