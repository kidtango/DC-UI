import React from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import { HeaderProps, Header } from 'components/Header/Header';
import { RTMIcon } from 'icons/RTMIcon';
import {
  DecisionBoxProps,
  DecisionBox,
} from 'components/DecisionBox/DecisionBox';

import { RiskProfileBuilder } from 'view/Risk/components';
import { AppConnectorIcon } from 'icons/AppConnectorIcon';
import { ProgressArrowIcon } from 'icons/ProgressArrowIcon';
import { RiskView } from 'view/Risk/components/RiskView';
import { useRTMContext } from '../contexts/RTMContext';
import PipeTallyInputForm from './PipeTallyInputForm';
import PipeTallyGenerator from './PipeTallyGenerator';
import { DrillPipeConnectorsBHA } from '.';
import CasingPointLocatorTool from './CasingPointLocatorTool';
import WellPlaningOptimizer from './WellPlaningOptimizer';
import PipeTallyTables from './PipeTallyTables';

// Mock Data Start

const pipeTally = {
  profileNumber: '02',
  pipes: [
    {
      id: '001',
      pipeOrder: '001',
      pipeWeight: 1104,
      pipeHeight: 125,
    },
    {
      id: '002',
      pipeOrder: '002',
      pipeWeight: 1504,
      pipeHeight: 125,
    },
    {
      id: '003',
      pipeOrder: '003',
      pipeWeight: 15404,
      pipeHeight: 251,
    },
  ],
};

const pipeTally2 = {
  profileNumber: '03',
  pipes: [
    {
      id: '001',
      pipeOrder: '001',
      pipeWeight: 1104,
      pipeHeight: 125,
    },
    {
      id: '002',
      pipeOrder: '002',
      pipeWeight: 1504,
      pipeHeight: 125,
    },
    {
      id: '003',
      pipeOrder: '003',
      pipeWeight: 15404,
      pipeHeight: 251,
    },
  ],
};

const pipeTally3 = {
  profileNumber: '04',
  pipes: [
    {
      id: '001',
      pipeOrder: '001',
      pipeWeight: 1104,
      pipeHeight: 125,
    },
    {
      id: '002',
      pipeOrder: '002',
      pipeWeight: 1504,
      pipeHeight: 125,
    },
    {
      id: '003',
      pipeOrder: '003',
      pipeWeight: 15404,
      pipeHeight: 251,
    },
  ],
};

// Mock Data ends

const RTMDashboard: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { decisionBoxContent, pipeTallyGenState } = useRTMContext();

  const headerContents: HeaderProps = {
    title: 'RTM for Well Execution Suite',
    subTitle: 'SYSTEM LAB APPLICATIONS',
    icon: <RTMIcon fontSize='inherit' />,
    iconColor: theme.palette.icon.RTM,
  };

  const decisionBoxContents: DecisionBoxProps = {
    content: decisionBoxContent,
    inputForm: <PipeTallyInputForm />,
    showForm: pipeTallyGenState?.isActive,
  };

  return (
    <div className={classes.root}>
      {/* Header section */}
      <Header {...headerContents} />

      {/* Main Contents */}
      <Grid container spacing={1}>
        <Grid
          item
          container
          direction='column'
          justify='flex-start'
          alignItems='flex-start'
          sm={9}>
          {/* Decision Box Section */}
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
                        isActive={pipeTallyGenState?.isActive}
                      />
                      <ProgressArrowIcon
                        fontSize='small'
                        htmlColor={theme.palette.secondary.main}
                      />
                      <DrillPipeConnectorsBHA
                        isError={false}
                        isDisabled={true}
                        isActive={false}
                      />
                      <ProgressArrowIcon
                        fontSize='small'
                        htmlColor={theme.palette.secondary.main}
                      />
                      <CasingPointLocatorTool
                        isError={false}
                        isDisabled={true}
                        isActive={false}
                      />
                      <ProgressArrowIcon
                        fontSize='small'
                        htmlColor={theme.palette.secondary.main}
                      />
                      <WellPlaningOptimizer
                        isError={false}
                        isDisabled={true}
                        isActive={false}
                      />
                      <AppConnectorIcon
                        fontSize='small'
                        className={classes.appConnectIcon}
                        htmlColor={
                          pipeTallyGenState?.isActive
                            ? theme.palette.icon.wells
                            : theme.palette.secondary.main
                        }
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              {/* App Container #2*/}
              <Grid container className={classes.appContainer}>
                <Grid item container>
                  <Grid item container sm={12} className={classes.cardRow}>
                    <Grid item container alignItems='center'>
                      <RiskProfileBuilder
                        isError={false}
                        isDisabled={false}
                        isActive={pipeTallyGenState?.isActive}
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
          {/* Risk Panels */}
          <RiskView />
        </Grid>

        {/* <Grid item container sm={3} className={classes.drillingRigContainer}>
          <DrillingRig className={classes.drillingRig} fontSize='inherit' />
        </Grid> */}
        <Grid item container sm={9}>
          <PipeTallyTables pipeTally={pipeTally} profileColor={'limeGreen'} />
          <PipeTallyTables pipeTally={pipeTally2} profileColor={'orangeRed'} />
          <PipeTallyTables pipeTally={pipeTally3} profileColor={'yellow'} />
        </Grid>
      </Grid>
    </div>
  );
};

export default RTMDashboard;

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
