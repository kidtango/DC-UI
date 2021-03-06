import React from 'react';
import { HeaderProps, Header } from 'components/Header/Header';
import { makeStyles, Theme, useTheme } from '@material-ui/core';

import { StandardsIcon } from 'icons/StandardsIcon';
import Grid from '@material-ui/core/Grid';
import DecisionBox from 'components/DecisionBox';
import { DecisionBoxProps } from 'components/DecisionBox/DecisionBox';
import { ProgressArrowIcon } from 'icons/ProgressArrowIcon';
import { StandardsInputForm } from './Forms';
import {
  SlurryAndSpacerWeight,
  AnnularHydraulicFluidsCalc,
  MaxMudPressureCheck,
  CasingWearLimit,
} from './AppCards';
import DrillPipeInventoryCheck from './AppCards/DrillPipeInventoryCheck';
import useStandardsContext from '../contexts';
import {
  SlurryWeightTable,
  SlurrySpacerTableView,
} from './Tables/SlurryAndSpacerTables';

const StandardsDashboard: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { decisionBoxContent, slurrySpacerState } = useStandardsContext();

  const headerContents: HeaderProps = {
    title: 'Standards Application Suite',
    subTitle: 'SYSTEM LAB APPLICATIONS',
    icon: <StandardsIcon fontSize='inherit' />,
    iconColor: theme.palette.icon.standards,
  };

  const decisionBoxContents: DecisionBoxProps = {
    content: decisionBoxContent,
    inputForm: <StandardsInputForm />,
    showForm: slurrySpacerState?.isActive,
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
                      <SlurryAndSpacerWeight
                        isDisabled={false}
                        isError={false}
                        isActive={slurrySpacerState?.isActive!}
                      />
                      <ProgressArrowIcon fontSize='small' />
                      <DrillPipeInventoryCheck
                        isDisabled={true}
                        isError={false}
                        isActive={false}
                      />
                      <ProgressArrowIcon fontSize='small' />
                      <AnnularHydraulicFluidsCalc
                        isDisabled={true}
                        isError={false}
                        isActive={false}
                      />
                      <ProgressArrowIcon fontSize='small' />
                      <MaxMudPressureCheck
                        isDisabled={true}
                        isError={false}
                        isActive={false}
                      />
                      <ProgressArrowIcon fontSize='small' />
                      <CasingWearLimit
                        isDisabled={true}
                        isError={false}
                        isActive={false}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              {/* App Container #2*/}
              <Grid container className={classes.appContainer}>
                <Grid item container>
                  <Grid item container sm={12} className={classes.cardRow}>
                    <Grid item container alignItems='center'></Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* Risk Panels */}
        </Grid>

        {/* <Grid item container sm={3} className={classes.drillingRigContainer}>
          <DrillingRig className={classes.drillingRig} fontSize='inherit' />
        </Grid> */}
        <Grid item container sm={9}>
          <SlurrySpacerTableView />
        </Grid>
      </Grid>
    </div>
  );
};

export default StandardsDashboard;

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
