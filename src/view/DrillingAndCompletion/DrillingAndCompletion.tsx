import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { Theme, Card, CardContent } from '@material-ui/core';
import { DrillAndCompletionIcon } from 'icons/DrillAndCompletionIcon';
import DecisionBox from 'components/DecisionBox';
import { DecisionBoxProps } from 'components/DecisionBox/DecisionBox';
import { HeaderProps, Header } from 'components/Header/Header';
import { AppCard, AppCardProps } from 'components/AppCard/AppCard';

export const DrillingAndCompletion: React.FC = () => {
  const classes = useStyles();

  const headerContents: HeaderProps = {
    title: 'Wells System Suite',
    subTitle: 'System Lap Application',
    icon: (
      <DrillAndCompletionIcon fontSize='inherit' className={classes.icon} />
    ),
  };

  const decisionBoxContents: DecisionBoxProps = {
    content:
      'Given a well plan, is is advisable to drill? To start, we have pre-selected three apps to help answer this question.',
    actionButtonTitle: 'evaluation',
  };

  const appCardContents: AppCardProps = {
    domainTitle: 'STANDARDS',
    appTitle: 'Slurry & spacer weight',
    appIcon: (
      <DrillAndCompletionIcon
        fontSize='inherit'
        className={classes.domainIcon}
      />
    ),
  };

  return (
    <div className={classes.root}>
      {/* Header section */}
      <Header {...headerContents} />

      <Grid container spacing={1}>
        <Grid item sm={9}>
          <Grid container spacing={1}>
            <Grid item sm={12}>
              <DecisionBox {...decisionBoxContents} />
            </Grid>

            <Grid item sm={12}>
              <Grid container>
                <AppCard {...appCardContents} />
                <AppCard {...appCardContents} />
                <AppCard {...appCardContents} />
              </Grid>
            </Grid>
            <Grid item sm={12}>
              <Grid container>
                <AppCard {...appCardContents} />
                <AppCard {...appCardContents} />
                <AppCard {...appCardContents} />
                <AppCard {...appCardContents} />
              </Grid>
            </Grid>
            <Grid item sm={12}>
              <Grid container>
                <AppCard {...appCardContents} />
                <AppCard {...appCardContents} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={3}>
          <Paper>Rig picture</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: { background: '#F5F5F5' },

  icon: { height: '39px', width: '39px', color: '#009DD9' },
  domainIcon: {
    width: 55,
    height: 55,
    marginRight: -10,
  },
}));
