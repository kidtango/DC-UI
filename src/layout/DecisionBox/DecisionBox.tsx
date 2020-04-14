import React from 'react';
import { Grid, Paper } from '@material-ui/core';

export const DecisionBox: React.FC = () => {
  return (
    <Grid container spacing={1}>
      <Grid item sm={9}>
        <Paper>Decision Box</Paper>
      </Grid>
      <Grid item sm={3}>
        <Paper>Rig picture</Paper>
      </Grid>
    </Grid>
  );
};
