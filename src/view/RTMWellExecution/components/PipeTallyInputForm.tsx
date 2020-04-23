import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Button } from '@material-ui/core';
import validate from 'validate.js';

const formSchema = {
  depth: {
    presence: { allowEmpty: false, message: 'Depth in ft. is required' },
    type: 'string',
  },
  pressure: {
    presence: { allowEmpty: false, message: 'Pressure in paia is required' },
    type: 'string',
  },
  event: {
    presence: {
      allowEmpty: false,
      message: 'Please fill in event description',
    },
    type: 'string',
  },
};

interface State {
  values: {
    depth: number | null;
    pressure: number | null;
    event: string;
  };
  isValid: boolean;
  touched: {
    depth: boolean;
    pressure: boolean;
    event: boolean;
  };
  errors: {
    depth: string[];
    pressure: string[];
    event: string[];
  };
}

const PipeTallyInputForm: React.FC = () => {
  const [formState, setFormState] = useState<State>({
    values: { depth: null, pressure: null, event: '' },
    isValid: false,
    touched: { depth: false, pressure: false, event: false },
    errors: { depth: [''], pressure: [''], event: [''] },
  });

  useEffect(() => {
    const errors = validate(formState.values, formSchema);

    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const hasError = (
    field: keyof typeof formState.touched | keyof typeof formState.errors
  ) => (formState.touched[field] && formState.errors[field] ? true : false);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant='outlined'
      >
        <InputLabel
          htmlFor='outlined-adornment-depth'
          margin='dense'
          error={hasError('depth')}
          required={true}
        >
          enter depth in ft
        </InputLabel>
        <OutlinedInput
          error={hasError('depth')}
          id='outlined-adornment-depth'
          name='depth'
          type={'number'}
          required={true}
          value={formState.values && formState.values.depth}
          onChange={handleChange}
          labelWidth={100}
          classes={{ root: classes.outlinedInput }}
        />
      </FormControl>
      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant='outlined'
      >
        <InputLabel
          htmlFor='outlined-adornment-pressure'
          margin='dense'
          required={true}
          error={hasError('pressure')}
        >
          enter pressure in paia
        </InputLabel>
        <OutlinedInput
          error={hasError('pressure')}
          id='outlined-adornment-pressure'
          name='pressure'
          type={'number'}
          value={formState.values && formState.values.pressure}
          onChange={handleChange}
          labelWidth={135}
          classes={{ root: classes.outlinedInput }}
        />
      </FormControl>
      <FormControl
        className={clsx(classes.margin, classes.descriptionTextField)}
        variant='outlined'
      >
        <InputLabel
          htmlFor='outlined-adornment-event'
          margin='dense'
          required={true}
          error={hasError('event')}
        >
          describe event
        </InputLabel>
        <OutlinedInput
          error={hasError('event')}
          id='outlined-adornment-event'
          type={'text'}
          name='event'
          value={(formState?.values && formState?.values.event) || ''}
          onChange={handleChange}
          labelWidth={100}
          classes={{ root: classes.outlinedInput }}
        />
      </FormControl>
      <div className={classes.buttonGroup}>
        <Button
          variant='contained'
          color='primary'
          className={classes.submit}
          classes={{ root: classes.buttonRoot }}
          disabled={!formState.isValid}
          type='submit'
        >
          submit
        </Button>
        <Button
          variant='contained'
          color='secondary'
          className={classes.clear}
          classes={{ root: classes.buttonRoot }}
        >
          clear
        </Button>
      </div>
    </div>
  );
};

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

    textField: {
      width: '18%',
    },
    descriptionTextField: {
      flex: 1,
      width: 'auto',
    },
    buttonGroup: {},
    submit: { marginRight: theme.spacing(1) },
    clear: {},
    buttonRoot: { width: 70, height: 40 },
    outlinedInput: { height: 40, padding: 0, alignItems: 'center' },
  })
);

export default PipeTallyInputForm;
