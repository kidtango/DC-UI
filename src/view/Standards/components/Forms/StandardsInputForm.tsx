import React, { useState, useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FormControlLabel,
  Select,
  Button,
} from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import clsx from 'clsx';
import validate from 'validate.js';

const formSchema = {
  mudWeight: {
    presence: {
      allowEmpty: false,
      message: 'Please fill in mud weight',
    },
    type: 'number',
  },
};

interface State {
  values: {
    mudWeight: number | null;
    density: number;
  };
  isValid: boolean;
  touched: {
    mudWeight: boolean;
    density: boolean;
  };
  errors: {
    mudWeight: string[];
    density: string[];
  };
}

const StandardsInputForm: React.FC = () => {
  const classes = useStyles();

  const [formState, setFormState] = useState<State>({
    values: { mudWeight: 0.0, density: 0.5 },
    isValid: false,
    touched: { mudWeight: false, density: false },
    errors: { mudWeight: [''], density: [''] },
  });
  console.log('StandardsInputForm:React.FC -> formState', formState);

  useEffect(() => {
    const errors = validate(formState.values, formSchema);

    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const [densitySwitch, setDensitySwitch] = React.useState(false);

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: string | unknown }>
  ) => {
    event.persist();

    console.log(event.target.name, event.target.value);

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name as any]: parseFloat(event.target.value as string),
      },
      touched: {
        ...formState.touched,
        [event.target.name as any]: true,
      },
    }));
  };

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDensitySwitch(event.target.checked);
  };

  const hasError = (field: 'mudWeight' | 'density') =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      <FormControl
        className={clsx(classes.margin, classes.mudWeight)}
        variant='outlined'>
        <InputLabel
          htmlFor='outlined-adornment-mudWeight'
          margin='dense'
          error={hasError('mudWeight')}
          required={true}>
          enter mud weight
        </InputLabel>
        <OutlinedInput
          error={hasError('density')}
          id='outlined-adornment-mudWeight'
          name='mudWeight'
          type='number'
          required={true}
          value={formState.values && formState.values.mudWeight}
          onChange={handleChange}
          labelWidth={120}
          classes={{ root: classes.outlinedInput }}
        />
      </FormControl>

      {densitySwitch && (
        <FormControl
          variant='outlined'
          className={clsx(classes.margin, classes.density)}>
          <InputLabel htmlFor='outlined-age-native-density' margin='dense'>
            Density
          </InputLabel>
          <Select
            classes={{ root: classes.outlinedInput }}
            native
            value={formState.values.density}
            onChange={handleChange}
            label='Density'
            inputProps={{
              name: 'density',
              id: 'density-input',
            }}>
            <option value={0.0}>.00</option>
            <option value={0.1}>.10</option>
            <option value={0.22}>.22</option>
            <option value={0.5}>.50</option>
            <option value={0.75}>.75</option>
          </Select>
        </FormControl>
      )}

      <div className={classes.switchInputGroup}>
        <InputLabel>Hierarchy density default is +.5</InputLabel>
        <div className={classes.switch}>
          <FormControlLabel
            value={densitySwitch}
            name='densitySwitch'
            control={<Switch color='primary' onChange={handleSwitchChange} />}
            label='Customize Density'
            labelPlacement='start'
          />
        </div>
      </div>
      <div className={classes.buttonGroup}>
        <Button
          variant='contained'
          color='primary'
          className={classes.submit}
          classes={{ root: classes.buttonRoot }}
          disabled={!formState.isValid}
          type='submit'>
          submit
        </Button>
        <Button
          variant='contained'
          color='secondary'
          className={classes.clear}
          classes={{ root: classes.buttonRoot }}>
          clear
        </Button>
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
      width: '12%',
    },
    density: {
      width: '8%',
    },
    switchInputGroup: {
      marginLeft: theme.spacing(2),
    },
    switch: {},
    buttonGroup: { marginLeft: theme.spacing(4) },

    formControl: { width: '10%' },
    submit: { marginRight: theme.spacing(1) },
    clear: {},
    buttonRoot: { width: 70, height: 40 },
    outlinedInput: { height: 40, padding: 0, alignItems: 'center' },
  })
);
