import React, { ReactElement, useEffect, useState } from 'react';
import { Theme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/styles';
import { CustomizedPanel } from 'components/CustomizedPanel';
import mapMatrix, { RiskMatrix } from 'view/Risk/components/Matrix';

import data from 'view/Risk/sampleResData/mvp31-sampleRes.json';
import { getRiskProfileAdapter, configureRiskBuckets } from 'view/Risk/utils';
import matrixConfig from '../Matrix/matrixConfig';
import { RiskStreamList } from '../RiskStreamList';

// mock data
const selectedRiskBucket = [
  {
    cause: 'cause',
    color: 'level10',
    confidenceLevel: 1,
    consequence: 'consequence',
    description:
      'Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks',
    lowConfidence: false,
    severity: 3,
    likelihood: 1,
    risk: {
      id: '1',
      cause: 'Death of many people',
      consequence: 'Death of many people',
      description:
        'Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks',
      title: 'Godzilla!',
    },
  },
  {
    cause: 'cause',
    color: 'level9',
    confidenceLevel: 1,
    consequence: 'consequence',
    description:
      'Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks',
    lowConfidence: false,
    severity: 3,
    likelihood: 1,
    risk: {
      id: '1',
      cause: 'Death of many people',
      consequence: 'Death of many people',
      description:
        'Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks Godzilla attacks',
      title: 'Godzilla!',
    },
  },
  {
    cause: 'cause',
    color: 'level8',
    confidenceLevel: 1,
    consequence: 'consequence',
    description: 'Godzilla attacks',
    lowConfidence: false,
    severity: 3,
    likelihood: 1,
    risk: {
      id: '1',
      cause: 'Death of many people',
      consequence: 'Death of many people',
      description: 'Godzilla attacks',
      title: 'Godzilla!',
    },
  },
  {
    cause: 'cause',
    color: 'level6',
    confidenceLevel: 1,
    consequence: 'consequence',
    description: 'Godzilla attacks',
    lowConfidence: false,
    severity: 3,
    likelihood: 1,
    risk: {
      id: '1',
      cause: 'Death of many people',
      consequence: 'Death of many people',
      description: 'Godzilla attacks',
      title: 'Godzilla!',
    },
  },
  {
    cause: 'cause',
    color: 'level6',
    confidenceLevel: 1,
    consequence: 'consequence',
    description: 'Godzilla attacks',
    lowConfidence: false,
    severity: 3,
    likelihood: 1,
    risk: {
      id: '1',
      cause: 'Death of many people',
      consequence: 'Death of many people',
      description: 'Godzilla attacks',
      title: 'Godzilla!',
    },
  },
  {
    cause: 'cause',
    color: 'level6',
    confidenceLevel: 1,
    consequence: 'consequence',
    description: 'Godzilla attacks',
    lowConfidence: false,
    severity: 3,
    likelihood: 1,
    risk: {
      id: '1',
      cause: 'Death of many people',
      consequence: 'Death of many people',
      description: 'Godzilla attacks',
      title: 'Godzilla!',
    },
  },
  {
    cause: 'cause',
    color: 'level6',
    confidenceLevel: 1,
    consequence: 'consequence',
    description: 'Godzilla attacks',
    lowConfidence: false,
    severity: 3,
    likelihood: 1,
    risk: {
      id: '1',
      cause: 'Death of many people',
      consequence: 'Death of many people',
      description: 'Godzilla attacks',
      title: 'Godzilla!',
    },
  },
  {
    cause: 'cause',
    color: 'level6',
    confidenceLevel: 1,
    consequence: 'consequence',
    description: 'Godzilla attacks',
    lowConfidence: false,
    severity: 3,
    likelihood: 1,
    risk: {
      id: '1',
      cause: 'Death of many people',
      consequence: 'Death of many people',
      description: 'Godzilla attacks',
      title: 'Godzilla!',
    },
  },
  {
    cause: 'cause',
    color: 'level6',
    confidenceLevel: 1,
    consequence: 'consequence',
    description: 'Godzilla attacks',
    lowConfidence: false,
    severity: 3,
    likelihood: 1,
    risk: {
      id: '1',
      cause: 'Death of many people',
      consequence: 'Death of many people',
      description: 'Godzilla attacks',
      title: 'Godzilla!',
    },
  },
  {
    cause: 'cause',
    color: 'level6',
    confidenceLevel: 1,
    consequence: 'consequence',
    description: 'Godzilla attacks',
    lowConfidence: false,
    severity: 3,
    likelihood: 1,
    risk: {
      id: '1',
      cause: 'Death of many people',
      consequence: 'Death of many people',
      description: 'Godzilla attacks',
      title: 'Godzilla!',
    },
  },
];

export interface RiskViewProps {}

function RiskView(): ReactElement {
  const classes = useStyles();

  const [expanded, setExpanded] = useState<string | false>('panel1');
  const [mappedMatrix, setMappedMatrix] = useState<{ [key: string]: {} }>();

  useEffect(() => {
    if (data && data.classifyRisk) {
      const adaptedMVP = getRiskProfileAdapter(data.classifyRisk);
      const calculatedRiskBuckets = configureRiskBuckets(adaptedMVP);

      const mappedMatrix = mapMatrix(
        calculatedRiskBuckets!,
        matrixConfig.matrix6x6.matMapColors
      );
      setMappedMatrix(mappedMatrix);
    }
  }, [data.classifyRisk]);

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    newExpanded: boolean
  ) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Grid item container>
      <div className={classes.note}>
        Note: The Consequence algorithm has a Confidence level of 1% (low) for
        all events.
      </div>
      <Grid item container spacing={1}>
        <Grid item sm={6} alignItems='center' alignContent='center'>
          <CustomizedPanel
            title={'RISK MATRIX'}
            panelName={'riskMatrix'}
            disclaimer={'Confidence level 1%'}>
            <div className={classes.riskMatrix}>
              <RiskMatrix mappedMatrix={mappedMatrix} />
            </div>
          </CustomizedPanel>
        </Grid>
        <Grid item sm={6}>
          <CustomizedPanel
            title={'RISK STREAM'}
            panelName={'consequenceProfile'}
            disclaimer={'Confidence level 1%'}>
            <div>
              <RiskStreamList selectedRiskBucket={selectedRiskBucket} />
            </div>
          </CustomizedPanel>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default RiskView;

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  panelTitle: {
    fontSize: 16,
    letterSpacing: -1,
    lineHeight: '20px',
    fontWeight: 600,
  },
  riskMatrix: {},
  note: {
    color: theme.palette.error.main,
    marginBottom: theme.spacing(1),
    fontSize: 12,
  },
}));
