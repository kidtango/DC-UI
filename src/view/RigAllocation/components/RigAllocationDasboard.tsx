import React from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { HeaderProps, Header } from 'components/Header/Header';
import {
  DecisionBoxProps,
  DecisionBox,
} from 'components/DecisionBox/DecisionBox';
import { ProgressArrowIcon } from 'icons/ProgressArrowIcon';
import { RigAllocationIcon } from 'icons/RigAllocationIcon';
import {
  RigSelectionView,
  RigTypesHES,
  RigDowntimeEstimator,
  WellEfficiencyPlanner,
  RigTimeCostOptimizer,
} from './AppCards';
import { RigAllocationTable } from './RigAllocationTable';
import { RigAllocationInputForm } from './InputForm';
import { useRigAllocationContext } from '../contexts/RigAllocationContext';
import { EffeciencyFrontierView } from './EffeciencyFrontier';

const RigAllocationDashboard: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  const { decisionBoxContent, rigSelectionView } = useRigAllocationContext();

  const headerContents: HeaderProps = {
    title: 'Rig Allocation Application Suite',
    subTitle: 'SYSTEM LAB APPLICATIONS',
    icon: <RigAllocationIcon fontSize='inherit' />,
    iconColor: theme.palette.icon.rigAllocation,
  };

  const decisionBoxContents: DecisionBoxProps = {
    content: decisionBoxContent,
    showForm: rigSelectionView?.isActive,
    inputForm: <RigAllocationInputForm />,
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
                    <RigSelectionView
                      isError={false}
                      isDisabled={false}
                      isActive={rigSelectionView?.isActive!}
                    />
                    <ProgressArrowIcon
                      fontSize='small'
                      htmlColor={theme.palette.secondary.main}
                    />
                    <RigTypesHES
                      isError={false}
                      isDisabled={true}
                      isActive={false}
                    />
                    <ProgressArrowIcon
                      fontSize='small'
                      htmlColor={theme.palette.secondary.main}
                    />
                    <RigDowntimeEstimator
                      isError={false}
                      isDisabled={true}
                      isActive={false}
                    />
                    <ProgressArrowIcon
                      fontSize='small'
                      htmlColor={theme.palette.secondary.main}
                    />
                    <WellEfficiencyPlanner
                      isError={false}
                      isDisabled={true}
                      isActive={false}
                    />
                    <ProgressArrowIcon
                      fontSize='small'
                      htmlColor={theme.palette.secondary.main}
                    />
                    <RigTimeCostOptimizer
                      isError={false}
                      isDisabled={true}
                      isActive={false}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Decision Detail Panel */}
        <Grid item container sm={3} className={classes.decisionPanel}>
          {/* <DecisionDetailPanel /> */}
          Drilling Rig Pic
        </Grid>
      </Grid>
      <Grid item container sm={9}>
        <RigAllocationTable />
      </Grid>
      <Grid item container sm={9} className={classes.effeciencyFrontier}>
        <EffeciencyFrontierView />
      </Grid>
    </div>
  );
};

export default RigAllocationDashboard;

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
  effeciencyFrontier: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));
