import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core';

interface Props {}

const EffeciencyFrontierResults: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container sm={12}>
      <Grid item sm={12}>
        <Typography variant='body1' className={classes.body}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ipsum
          ad fuga labore quaerat, modi error rem adipisci quae totam! Temporibus
          soluta culpa maxime dicta, nisi reiciendis provident beatae neque.
        </Typography>
      </Grid>
      <Grid item sm={12} className={classes.optRig}>
        <div className={classes.optRigHeader}>Optimal rigs:</div>
        <Typography variant='body2' className={classes.rig}>
          Rig B
        </Typography>
        <Typography variant='body2' className={classes.rig}>
          Rig F
        </Typography>
        <Typography variant='body2' className={classes.rig}>
          Rig G
        </Typography>
      </Grid>
      <Grid item sm={12} className={classes.body}>
        <Typography variant='body1'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ipsum
          ad fuga labore quaerat, modi error rem adipisci quae totam! Temporibus
          soluta culpa maxime dicta, nisi reiciendis provident beatae neque.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default EffeciencyFrontierResults;

const useStyles = makeStyles((theme: Theme) => ({
  optRig: {},
  optRigHeader: {
    fontSize: 16,
    lineHeight: '20px',
    fontWeight: 600,
  },
  rig: {
    marginTop: theme.spacing(1),
  },
  body: { margin: `16px 0 16px 0` },
}));
