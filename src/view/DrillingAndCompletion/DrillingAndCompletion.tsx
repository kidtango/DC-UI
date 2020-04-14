import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import Header from 'layout/Header';
import classes from '*.module.css';
import { DrillAndCompletionIcon } from 'icons/DrillAndCompletionIcon';
import DecisionBox from 'layout/DecisionBox';

export const DrillingAndCompletion: React.FC = () => {
  const classes = useStyles();

  const headerContent = {
    title: 'Wells System Suite',
    subTitle: 'System Lap Application',
    icon: (
      <DrillAndCompletionIcon fontSize='inherit' className={classes.icon} />
    ),
  };
  return (
    <div className={classes.root}>
      {/* Header section */}
      <Header headerContent={headerContent} />

      <DecisionBox />
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: { background: '#F5F5F5' },
  icon: { height: '39px', width: '39px', color: '#009DD9' },
}));
