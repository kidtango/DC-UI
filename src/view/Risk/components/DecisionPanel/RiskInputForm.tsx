import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Button } from '@material-ui/core';
import validate from 'validate.js';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import { safeguards } from 'view/Risk/safeguards/safeguards';

// Configuration for safeguards menu
const ITEM_HEIGHT = 100;
const ITEM_PADDING_TOP = 10;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const formSchema = {
  event: {
    presence: {
      allowEmpty: false,
      message: 'Please fill in event description',
    },
    type: 'string',
  },
  safeguards: {
    presence: {
      allowEmpty: false,
      message: 'Safeguards are required',
    },
    type: 'array',
  },
};

interface State {
  values: {
    event: string;
    safeguards: string[];
  };
  isValid: boolean;
  touched: {
    event: boolean;
    safeguards: boolean;
  };
  errors: {
    event: string[];
    safeguards: string[];
  };
}

const RiskInputForm: React.FC = () => {
  const classes = useStyles();
  const [formState, setFormState] = useState<State>({
    values: { event: '', safeguards: [] },
    isValid: false,
    touched: { event: false, safeguards: false },
    errors: { event: [''], safeguards: [''] },
  });

  useEffect(() => {
    const errors = validate(formState.values, formSchema);

    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (event: React.ChangeEvent<any>) => {
    event.persist();

    if (event.target.name === 'safeguards') {
      setFormState((formState) => ({
        ...formState,
        values: {
          ...formState.values,
          [event.target.name]: event.target.value as string[],
        },
        touched: {
          ...formState.touched,
          [event.target.name]: true,
        },
      }));
    } else {
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
    }
  };

  const hasError = (field: 'event' | 'safeguards') =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <>
      <div className={classes.root}>
        <FormControl
          className={clsx(classes.margin, classes.descriptionTextField)}
          variant='outlined'>
          <InputLabel
            htmlFor='outlined-adornment-event'
            margin='dense'
            required={true}
            error={hasError('event')}>
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
      </div>
      <div className={classes.safeguards}>
        <FormControl className={classes.safeguardForm}>
          <InputLabel
            id='safeguards-label'
            error={hasError('safeguards')}
            required={true}>
            Select Safeguards
          </InputLabel>
          <Select
            labelId='safeguards-checkbox-label'
            id='safeguards-checkbox'
            name='safeguards'
            required={true}
            error={hasError('safeguards')}
            multiple
            value={formState.values.safeguards}
            onChange={handleChange}
            input={<Input />}
            renderValue={(selected) => {
              if ((selected as string[]).length === 0) {
                return <em>Placeholder</em>;
              }

              return (selected as string[]).join(', ');
            }}
            MenuProps={MenuProps}>
            {safeguards.map((safeguard) => (
              <MenuItem key={safeguard} value={safeguard}>
                <Checkbox
                  checked={formState.values.safeguards.indexOf(safeguard) > -1}
                />
                <ListItemText primary={safeguard} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
    </>
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
    safeguards: {
      display: 'flex',
      alignContent: 'space-between',
      alignItems: 'center',
    },
    buttonGroup: { marginRight: theme.spacing(1) },
    safeguardForm: {
      marginRight: 'auto',
      minWidth: '82%',
      maxWidth: '90%',
    },

    submit: { marginRight: theme.spacing(1) },
    clear: {},
    buttonRoot: { width: 70, height: 40 },
    outlinedInput: { height: 40, padding: 0, alignItems: 'center' },
  })
);

export default RiskInputForm;
