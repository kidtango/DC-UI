import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { WellsSystemSuiteIcon } from 'icons/WellsSystemSuiteIcon';
import DecisionBox from 'components/DecisionBox';
import { DecisionBoxProps } from 'components/DecisionBox/DecisionBox';
import { HeaderProps, Header } from 'components/Header/Header';

import { AppConnectorIcon } from 'icons/AppConnectorIcon';
import { DrillingRig } from 'icons/DrillingRig';
import { ProgressArrowIcon } from 'icons/ProgressArrowIcon';
import {
  CasingWearLimit,
  SlurryAndSpacerWeight,
} from 'view/Standards/components';
import { RigSelectionView } from 'view/RigAllocation/components';
import { RiskProfileBuilder } from 'view/Risk/components';

export const WellsSystemSuite: React.FC = () => {
  const classes = useStyles();
  const [isEnabled, setIsEnabled] = useState(false);

  const headerContents: HeaderProps = {
    title: 'Wells System Suite',
    subTitle: 'System Lap Application',
    icon: (
      <WellsSystemSuiteIcon fontSize='inherit' className={classes.headerIcon} />
    ),
  };

  const decisionBoxContents: DecisionBoxProps = {
    content:
      'Given a well plan, is is advisable to drill? To start, we have pre-selected three apps to help answer this question.',
    actionButtonTitle: 'evaluation',
  };

  return (
    <div className={classes.root}>
      {/* Header section */}
      <Header {...headerContents} />

      {/* Decision Box section */}
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
                      <SlurryAndSpacerWeight
                        isDisabled={false}
                        isError={false}
                      />
                      <ProgressArrowIcon fontSize='small' />

                      <RiskProfileBuilder isDisabled={false} isError={true} />
                      <ProgressArrowIcon fontSize='small' />
                      <CasingWearLimit isDisabled={true} isError={false} />
                      <ProgressArrowIcon fontSize='small' />
                      <RigSelectionView isDisabled={true} isError={false} />
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
                      <SlurryAndSpacerWeight
                        isDisabled={true}
                        isError={false}
                      />
                      <ProgressArrowIcon fontSize='small' />

                      <RiskProfileBuilder isDisabled={true} isError={false} />
                      <ProgressArrowIcon fontSize='small' />
                      <SlurryAndSpacerWeight
                        isDisabled={true}
                        isError={false}
                      />
                      <ProgressArrowIcon fontSize='small' />
                      <SlurryAndSpacerWeight
                        isDisabled={true}
                        isError={false}
                      />
                      <AppConnectorIcon
                        fontSize='small'
                        className={classes.appConnectIcon}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container sm={3} className={classes.drillingRigContainer}>
          <DrillingRig className={classes.drillingRig} fontSize='inherit' />
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: { background: '#F5F5F5' },

  headerIcon: { height: '60px', width: '60px', color: '#009DD9' },
  domainIcon: {
    width: 60,
    height: 60,
    marginRight: -10,
    color: theme.palette.text.disabled,
  },
  appContainer: {
    marginBottom: '20px',
    // backgroundColor: 'orangeRed',
  },
  cardRow: {
    position: 'relative',
  },
  appConnectIcon: {
    position: 'absolute',
    top: '100%',
    left: '100px',
  },
  drillingRigContainer: {},
  drillingRig: {
    minWidth: 310,
    minHeight: 610,
    marginRight: 'auto',
  },
}));
