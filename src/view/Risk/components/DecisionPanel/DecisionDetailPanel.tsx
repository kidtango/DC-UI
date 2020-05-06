import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  makeStyles,
  Theme,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
  MenuItem,
  Button,
  Grid,
  Chip,
} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import theme from 'theme';

const safeguards = [
  {
    value: 'Safe1',
  },
  {
    value: 'Safe2',
  },
  {
    value: 'Safe3',
  },
];

interface Props {}

const DecisionDetailPanel = (props: Props) => {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <Grid item container className={classes.root}>
      <Paper elevation={2} className={classes.paper}>
        <Typography variant='h1'>Decision Detail Panel</Typography>
        <Typography variant='body1' className={classes.body}>
          Describe an event to calculate and graph its likelihood and
          consequence on a risk matrix
        </Typography>
        <FormControl variant='outlined' className={classes.inputField}>
          <InputLabel
            htmlFor='outlined-adornment-event'
            margin='dense'
            // error={hasError('event')}
            required={true}>
            Describe risk event
          </InputLabel>
          <OutlinedInput
            // error={hasError('event')}
            id='outlined-adornment-event'
            name='riskEvent'
            type={'number'}
            required={true}
            // value={formState.values && formState.values.depth}
            // onChange={handleChange}
            labelWidth={100}
            // classes={{ root: classes.outlinedInput }}
          />

          <TextField
            className={classes.inputField}
            id='outlined-select-currency'
            select
            label='Select Safeguards'
            // value={currency}
            // onChange={handleChange}
            variant='outlined'>
            {safeguards.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
        <div className={classes.buttonGroup}>
          <Button
            variant='contained'
            color='primary'
            type='submit'
            classes={{ root: classes.buttonRoot }}
            className={classes.submit}>
            Submit
          </Button>
          <Button
            variant='contained'
            color='secondary'
            type='submit'
            classes={{ root: classes.buttonRoot }}>
            Clear
          </Button>
        </div>

        {/* Safeguard chips */}
        <div className={classes.safeguardChips}>
          <Chip size='small' label='Clickable' onClick={handleClick} />
          <Chip size='small' label='Deletable' onDelete={handleDelete} />
          <Chip
            size='small'
            label='Clickable Deletable'
            onClick={handleClick}
            onDelete={handleDelete}
          />
          <Chip
            size='small'
            label='Custom delete icon'
            onClick={handleClick}
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
          />
          <Chip
            size='small'
            label='Clickable Link'
            component='a'
            href='#chip'
            clickable
          />
          <Chip
            size='small'
            label='Primary Clickable'
            clickable
            color='primary'
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
          />
          <Chip
            size='small'
            label='Primary Clickable'
            clickable
            color='primary'
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
          />
          <Chip
            size='small'
            label='Deletable Primary'
            onDelete={handleDelete}
            color='primary'
          />
          <Chip
            size='small'
            label='Deletable Secondary'
            onDelete={handleDelete}
            color='secondary'
          />
        </div>
      </Paper>
    </Grid>
  );
};

export default DecisionDetailPanel;

const useStyles = makeStyles((theme: Theme) => ({
  root: { height: 300 },
  paper: {
    width: '100%',
    padding: theme.spacing(2),
  },
  body: { marginTop: theme.spacing(1) },
  margin: {
    marginRight: theme.spacing(1),
  },
  textField: {
    width: '100%',
  },
  inputField: { marginTop: theme.spacing(1), width: '100%' },
  buttonGroup: { marginTop: theme.spacing(2) },
  submit: { marginRight: theme.spacing(1) },
  safeguardChips: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },

  buttonRoot: {
    width: 70,
    height: 40,
  },
}));
