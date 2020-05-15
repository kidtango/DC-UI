import React from 'react';
import { Theme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/styles';
import { CustomizedPanel } from 'components/CustomizedPanel';
import SlurryWeightTable from './SlurryWeightTable';
import { SpacerWeightTable } from '.';

interface Props {}

const SlurrySpacerTableView: React.FC = (props: Props) => {
  const classes = useStyles();
  return (
    <Grid item container>
      <Grid item container spacing={1}>
        <Grid item sm={6} alignItems='center' alignContent='center'>
          <CustomizedPanel title={'SLURRY WEIGHT'} panelName={'riskMatrix'}>
            <div>
              <SlurryWeightTable />
            </div>
          </CustomizedPanel>
        </Grid>
        <Grid item sm={6}>
          <CustomizedPanel
            title={'SPACER WEIGHT'}
            panelName={'consequenceProfile'}>
            <div>
              <SpacerWeightTable />
            </div>
          </CustomizedPanel>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SlurrySpacerTableView;

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  panelTitle: {},
}));
