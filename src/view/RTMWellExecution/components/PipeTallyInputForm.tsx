import React, { useState } from 'react';

import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
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
    <>
      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant='outlined'
      >
        <InputLabel htmlFor='outlined-adornment-password'>
          enter depth in ft
        </InputLabel>
        <OutlinedInput
          id='outlined-adornment-password'
          type={'text'}
          // value={values.password}
          // onChange={handleChange('password')}

          labelWidth={100}
        />
      </FormControl>
      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant='outlined'
      >
        <InputLabel htmlFor='outlined-adornment-password'>
          enter pressure in paia
        </InputLabel>
        <OutlinedInput
          id='outlined-adornment-password'
          type={'text'}
          // value={values.password}
          // onChange={handleChange('password')}

          labelWidth={135}
        />
      </FormControl>
      <FormControl
        className={clsx(classes.margin, classes.descriptionTextField)}
        variant='outlined'
      >
        <InputLabel htmlFor='outlined-adornment-password'>
          describe event
        </InputLabel>
        <OutlinedInput
          id='outlined-adornment-password'
          type={'text'}
          // value={values.password}
          // onChange={handleChange('password')}

          labelWidth={100}
        />
      </FormControl>
      <div className={classes.buttonGroup}>
        <Button variant='contained' color='primary' className={classes.submit}>
          submit
        </Button>
        <Button variant='contained' color='secondary' className={classes.clear}>
          clear
        </Button>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '20%',
    },
    descriptionTextField: {
      width: '55%',
    },
    buttonGroup: {},
    submit: { marginRight: theme.spacing(1) },
    clear: {},
  })
);

export default PipeTallyInputForm;
