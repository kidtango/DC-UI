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
  depth: {
    presence: {
      allowEmpty: false,
      message: 'Please fill in mud weight in ft',
    },
    type: 'number',
  },
  pressure: {
    presence: {
      allowEmpty: false,
      message: 'Please fill in pressure in psia',
    },
    type: 'number',
  },
  height: {
    presence: {
      allowEmpty: false,
      message: 'Please fill in height in ft',
    },
    type: 'number',
  },
  distance: {
    presence: {
      allowEmpty: false,
      message: 'Please fill in distance in miles',
    },
    type: 'number',
  },
};

type InputFields = {
  depth: number | null;
  pressure: number | null;
  height: number | null;
  distance: number | null;
};

interface State {
  values: InputFields;
  isValid: boolean;
  touched: {
    depth: boolean;
    pressure: boolean;
    height: boolean;
    distance: boolean;
  };
  errors: {
    depth: string[];
    pressure: string[];
    height: string[];
    distance: string[];
  };
}

const RigAllocationInputForm: React.FC = () => {
  const classes = useStyles();

  const [formState, setFormState] = useState<State>({
    values: { depth: null, pressure: null, height: null, distance: null },
    isValid: false,
    touched: { depth: false, pressure: false, height: false, distance: false },
    errors: { depth: [''], pressure: [''], height: [''], distance: [''] },
  });

  useEffect(() => {
    const errors = validate(formState.values, formSchema);

    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: string | unknown }>
  ) => {
    event.persist();

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

  const hasError = (field: keyof InputFields) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    // Input depth field
    <div className={classes.root}>
      <FormControl
        className={clsx(classes.margin, classes.inputFields)}
        variant='outlined'>
        <InputLabel
          htmlFor='outlined-adornment-depth'
          margin='dense'
          error={hasError('depth')}
          required={true}>
          depth (ft)
        </InputLabel>
        <OutlinedInput
          error={hasError('depth')}
          id='outlined-adornment-depth'
          name='depth'
          type='number'
          required={true}
          value={formState.values && formState.values.depth}
          onChange={handleChange}
          labelWidth={60}
          classes={{ root: classes.outlinedInput }}
        />
      </FormControl>

      {/* Input pressure field */}
      <FormControl
        className={clsx(classes.margin, classes.inputFields)}
        variant='outlined'>
        <InputLabel
          htmlFor='outlined-adornment-pressure'
          margin='dense'
          error={hasError('pressure')}
          required={true}>
          pressure (psia)
        </InputLabel>
        <OutlinedInput
          error={hasError('pressure')}
          id='outlined-adornment-pressure'
          name='pressure'
          type='number'
          required={true}
          value={formState.values && formState.values.pressure}
          onChange={handleChange}
          labelWidth={100}
          classes={{ root: classes.outlinedInput }}
        />
      </FormControl>

      {/* Input height field */}
      <FormControl
        className={clsx(classes.margin, classes.inputFields)}
        variant='outlined'>
        <InputLabel
          htmlFor='outlined-adornment-height'
          margin='dense'
          error={hasError('height')}
          required={true}>
          Height (ft)
        </InputLabel>
        <OutlinedInput
          error={hasError('height')}
          id='outlined-adornment-height'
          name='height'
          type='number'
          required={true}
          value={formState.values && formState.values.height}
          onChange={handleChange}
          labelWidth={70}
          classes={{ root: classes.outlinedInput }}
        />
      </FormControl>

      {/* Input distance field */}
      <FormControl
        className={clsx(classes.margin, classes.inputFields)}
        variant='outlined'>
        <InputLabel
          htmlFor='outlined-adornment-distance'
          margin='dense'
          error={hasError('distance')}
          required={true}>
          distance (miles)
        </InputLabel>
        <OutlinedInput
          error={hasError('distance')}
          id='outlined-adornment-distance'
          name='distance'
          type='number'
          required={true}
          value={formState.values && formState.values.distance}
          onChange={handleChange}
          labelWidth={120}
          classes={{ root: classes.outlinedInput }}
        />
      </FormControl>

      {/* Submit/Clear Buttons */}
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

export default RigAllocationInputForm;

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
    inputFields: {
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
