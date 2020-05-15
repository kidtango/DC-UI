import React from 'react';
import { Theme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/styles';
import { CustomizedPanel } from 'components/CustomizedPanel';
import { EffeciencyFrontierGraph } from '.';
import EffeciencyFrontierResults from './EffeciencyFrontierResults';

interface Props {}

const SlurrySpacerTableView: React.FC = (props: Props) => {
  const classes = useStyles();
  return (
    <Grid item container>
      <Grid item container spacing={1}>
        <Grid item sm={6} alignItems='center' alignContent='center'>
          <CustomizedPanel
            title={'EFFECIENCY FRONTIER GRAPH'}
            panelName={'riskMatrix'}>
            <div>
              <EffeciencyFrontierGraph />
            </div>
          </CustomizedPanel>
        </Grid>
        <Grid item sm={6}>
          <CustomizedPanel
            title={'EFFECIENCY FRONTIER RESULTS'}
            panelName={'consequenceProfile'}>
            <div>
              <EffeciencyFrontierResults />
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
