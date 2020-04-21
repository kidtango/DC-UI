import React from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import { HeaderProps, Header } from 'components/Header/Header';
import { RTMIcon } from 'icons/RTMIcon';
import {
  DecisionBoxProps,
  DecisionBox,
} from 'components/DecisionBox/DecisionBox';
import {
  PipeTallyGenerator,
  DrillPipeConnectorsBHA,
  CasingPointLocatorTool,
  WellPlaningOptimizer,
} from './components';
import { RiskProfileBuilder } from 'view/Risk/components';
import { AppConnectorIcon } from 'icons/AppConnectorIcon';
import { ProgressArrowIcon } from 'icons/ProgressArrowIcon';

export const RTMWellExecution: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  const headerContents: HeaderProps = {
    title: 'RTM for well execution suite',
    subTitle: 'System Lap Applications',
    icon: <RTMIcon fontSize='inherit' />,
    iconColor: theme.palette.icon.RTM,
  };

  const decisionBoxContents: DecisionBoxProps = {
    content:
      'Click the pipe tally generator app below to generate a set of pipe tallies and their associated risk for your well depth and pressure, or select another available app.',
  };

  return (
    <div className={classes.root}>
      {/* Header section */}
      <Header {...headerContents} />

      {/* Decision Box Section */}
      <Grid container spacing={1}>
        <Grid
          item
          container
          direction='column'
          justify='flex-start'
          alignItems='flex-start'
          sm={9}
        >
          <Grid item container>
            <DecisionBox {...decisionBoxContents} />

            <Grid item container>
              {/* App Container #1*/}
              <Grid item container className={classes.appContainer}>
                <Grid item container>
                  <Grid item container sm={12} className={classes.cardRow}>
                    <Grid item container alignItems='center'>
                      <PipeTallyGenerator
                        isError={false}
                        isDisabled={false}
                        isActive={false}
                      />
                      <ProgressArrowIcon fontSize='small' />
                      <DrillPipeConnectorsBHA
                        isError={false}
                        isDisabled={false}
                        isActive={false}
                      />
                      <ProgressArrowIcon fontSize='small' />
                      <CasingPointLocatorTool
                        isError={false}
                        isDisabled={false}
                        isActive={false}
                      />
                      <ProgressArrowIcon fontSize='small' />
                      <WellPlaningOptimizer
                        isError={false}
                        isDisabled={false}
                        isActive={false}
                      />

                      <AppConnectorIcon
                        fontSize='small'
                        className={classes.appConnectIcon}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              {/* App Container #1*/}
              <Grid container className={classes.appContainer}>
                <Grid item container>
                  <Grid item container sm={12} className={classes.cardRow}>
                    <Grid item container alignItems='center'>
                      <RiskProfileBuilder
                        isError={false}
                        isDisabled={false}
                        isActive={false}
                      />
                      {/* <AppConnectorIcon
                        fontSize='small'
                        className={classes.appConnectIcon}
                      /> */}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* <Grid item container sm={3} className={classes.drillingRigContainer}>
          <DrillingRig className={classes.drillingRig} fontSize='inherit' />
        </Grid> */}
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: { background: '#F5F5F5' },
  appContainer: { marginBottom: '20px' },
  cardRow: { position: 'relative' },

  appConnectIcon: {
    position: 'absolute',
    top: '100%',
    left: '100px',
  },
  drillingRig: {
    minWidth: 310,
    minHeight: 610,
    marginRight: 'auto',
  },
}));
