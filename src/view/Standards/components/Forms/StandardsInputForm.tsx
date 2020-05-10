import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FormControlLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import clsx from 'clsx';
import { stat } from 'fs';

const formSchema = {
  mudWeight: {
    presence: {
      allowEmpty: false,
      message: 'Please fill in mud weight',
    },
    type: 'number',
  },
  density: {
    presence: {
      allowEmpty: true,
    },
  },
};

interface Props {}

const StandardsInputForm = (props: Props) => {
  const classes = useStyles();

  const [age, setAge] = React.useState('');

  // const hasError = (field: 'mudWeight' ) =>
  // formState.touched[field] && formState.errors[field] ? true : false;

  const [state, setState] = React.useState({
    densitySwitch: false,
  });
  console.log('StandardsInputForm -> state', state);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleChange -> event', event.target.name);
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <FormControl
        className={clsx(classes.margin, classes.mudWeight)}
        variant='outlined'>
        <InputLabel
          htmlFor='outlined-adornment-depth'
          margin='dense'
          // error={hasError('depth')}
          required={true}>
          enter mud weight
        </InputLabel>
        <OutlinedInput
          // error={hasError('depth')}
          id='outlined-adornment-depth'
          name='depth'
          type={'number'}
          required={true}
          // value={formState.values && formState.values.depth}
          // onChange={handleChange}
          labelWidth={120}
          classes={{ root: classes.outlinedInput }}
        />
      </FormControl>

      {state.densitySwitch && (
        <FormControl
          variant='outlined'
          className={clsx(classes.margin, classes.density)}>
          <InputLabel htmlFor='outlined-age-native-density' margin='dense'>
            Density
          </InputLabel>
          <Select
            classes={{ root: classes.outlinedInput }}
            native
            // value={state.age}
            // onChange={handleChange}
            label='Density'
            inputProps={{
              name: 'density',
              id: 'density-input',
            }}>
            <option aria-label='None' value='' />
            <option value={10}>.00</option>
            <option value={20}>.10</option>
            <option value={30}>.22</option>
            <option value={20}>.50</option>
            <option value={30}>.75</option>
          </Select>
        </FormControl>
      )}

      <div className={classes.switchInputGroup}>
        <InputLabel>Hierarchy density default is +.5</InputLabel>
        <div className={classes.switch}>
          <FormControlLabel
            value={state.densitySwitch}
            name='densitySwitch'
            control={<Switch color='primary' onChange={handleChange} />}
            label='Customize Density'
            labelPlacement='start'
          />
        </div>
      </div>
    </div>
  );
};

export default StandardsInputForm;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(1),
    },
    margin: {
      marginRight: theme.spacing(1),
    },
    mudWeight: {
      width: '18%',
    },
    density: {
      width: '12%',
    },
    switchInputGroup: {
      marginLeft: theme.spacing(2),
    },
    switch: {},
    buttonGroup: { marginRight: theme.spacing(1) },

    formControl: { width: '10%' },
    submit: { marginRight: theme.spacing(1) },
    clear: {},
    buttonRoot: { width: 70, height: 40 },
    outlinedInput: { height: 40, padding: 0, alignItems: 'center' },
  })
);
