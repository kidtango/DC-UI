import React from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { HeaderProps, Header } from 'components/Header/Header';
import { RiskIcon } from 'icons/RiskIcon';
import {
  DecisionBoxProps,
  DecisionBox,
} from 'components/DecisionBox/DecisionBox';
import { RiskProfileBuilder } from './components';
import { ProgressArrowIcon } from 'icons/ProgressArrowIcon';
import {
  SafeguardEvalAssessment,
  AssuranceAnalysis,
  RiskSafeguardDefinitionsModels,
} from './components/AppCards';
import { RiskView } from './components/RiskView';
import { RiskInputForm } from './components/DecisionPanel';
import { useRiskContexts } from './contexts/RiskContexts';

export const RiskDashboard: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  const { riskProfileBuilderState } = useRiskContexts();

  const { decisionBoxContent } = useRiskContexts();

  const headerContents: HeaderProps = {
    title: 'Risk View Application Suite',
    subTitle: 'SYSTEM LAB APPLICATIONS',
    icon: <RiskIcon fontSize='inherit' />,
    iconColor: theme.palette.icon.risk,
  };

  const decisionBoxContents: DecisionBoxProps = {
    content: decisionBoxContent,
    showForm: riskProfileBuilderState?.isActive,
    inputForm: <RiskInputForm />,
  };

  return (
    <div className={classes.root}>
      {/* Header Section */}
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
          <Grid item container>
            <DecisionBox {...decisionBoxContents} />

            <Grid item container>
              {/* App Container */}
              <Grid item container className={classes.appContainer}>
                <Grid item container>
                  <Grid item container alignItems='center'>
                    <RiskProfileBuilder
                      isError={false}
                      isDisabled={false}
                      isActive={riskProfileBuilderState?.isActive}
                    />
                    <ProgressArrowIcon
                      fontSize='small'
                      htmlColor={theme.palette.secondary.main}
                    />
                    <SafeguardEvalAssessment
                      isError={false}
                      isDisabled={true}
                      isActive={false}
                    />
                    <ProgressArrowIcon
                      fontSize='small'
                      htmlColor={theme.palette.secondary.main}
                    />
                    <AssuranceAnalysis
                      isError={false}
                      isDisabled={true}
                      isActive={false}
                    />
                    <ProgressArrowIcon
                      fontSize='small'
                      htmlColor={theme.palette.secondary.main}
                    />
                    <RiskSafeguardDefinitionsModels
                      isError={false}
                      isDisabled={true}
                      isActive={false}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* Risk Matrix Panel*/}
          <RiskView />
        </Grid>

        {/* Decision Detail Panel */}
        <Grid item container sm={3} className={classes.decisionPanel}>
          {/* <DecisionDetailPanel /> */}
        </Grid>
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
    minWidth: 450,
    minHeight: 610,
    marginRight: 'auto',
  },
  decisionPanel: {},
}));
