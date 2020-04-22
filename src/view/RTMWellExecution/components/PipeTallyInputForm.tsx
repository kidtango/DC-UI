import React, { useState } from 'react';

import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Button } from '@material-ui/core';

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

const PipeTallyInputForm: React.FC = () => {
  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant='outlined'
      >
        <InputLabel htmlFor='outlined-adornment-password' margin='dense'>
          enter depth in ft
        </InputLabel>
        <OutlinedInput
          id='outlined-adornment-password'
          type={'text'}
          // value={values.password}
          // onChange={handleChange('password')}

          labelWidth={100}
          classes={{ root: classes.outlinedInput }}
        />
      </FormControl>
      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant='outlined'
      >
        <InputLabel htmlFor='outlined-adornment-password' margin='dense'>
          enter pressure in paia
        </InputLabel>
        <OutlinedInput
          id='outlined-adornment-password'
          type={'text'}
          // value={values.password}
          // onChange={handleChange('password')}

          labelWidth={135}
          classes={{ root: classes.outlinedInput }}
        />
      </FormControl>
      <FormControl
        className={clsx(classes.margin, classes.descriptionTextField)}
        variant='outlined'
      >
        <InputLabel htmlFor='outlined-adornment-password' margin='dense'>
          describe event
        </InputLabel>
        <OutlinedInput
          id='outlined-adornment-password'
          type={'text'}
          // value={values.password}
          // onChange={handleChange('password')}

          labelWidth={100}
          classes={{ root: classes.outlinedInput }}
          error={false}
        />
      </FormControl>
      <div className={classes.buttonGroup}>
        <Button
          variant='contained'
          color='primary'
          className={classes.submit}
          classes={{ root: classes.buttonRoot }}
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
      width: '20%',
    },
    descriptionTextField: {
      flex: 1,
      width: 'auto',
    },
    buttonGroup: {},
    submit: { marginRight: theme.spacing(1) },
    clear: {},
    buttonRoot: { width: 70, height: 40 },
    outlinedInput: { height: 40, padding: 0, alignItems: 'end' },
  })
);

export default PipeTallyInputForm;
