import React, { useState } from 'react';
import _ from 'lodash';
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
import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import DoneIcon from '@material-ui/icons/Done';
import theme from 'theme';

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

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder Kelly Snyder Kelly Snyder Kelly Snyder Kelly Snyder Kelly Snyder',
];

interface safeguard {
  value: string;
  chipValue: string;
}

interface Props {}

const DecisionDetailPanel: React.FC = (props: Props) => {
  const classes = useStyles();
  // const [safeguards, setSafeguards] = useState<safeguard[]>([]);
  // console.log('DecisionDetailPanel:React.FC -> safeguards', safeguards);

  const [personName, setPersonName] = React.useState<string[]>([]);
  console.log('DecisionDetailPanel:React.FC -> personName', personName);

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPersonName(event.target.value as string[]);
  };

  const handleChangeMultiple = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const { options } = event.target as HTMLSelectElement;
    const value: string[] = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   let chipValue: string = '';
  //   if (event.target.value.length > 20) {
  //     chipValue = _.truncate(event.target.value, {
  //       length: 20,
  //       separator: ' ',
  //     });
  //   } else {
  //     chipValue = event.target.value;
  //   }

  //   console.log('handleChange -> chipValue', chipValue);

  //   const newSafeguard: safeguard = {
  //     value: event.target.value,
  //     chipValue,
  //   };
  //   safeguards!.push(newSafeguard);
  //   const uniqSafeguards = _.uniqWith(safeguards, _.isEqual);
  //   setSafeguards(uniqSafeguards);
  // };

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
            labelWidth={122}
            // classes={{ root: classes.outlinedInput }}
          />

          {/* <TextField
            className={classes.inputField}
            id='outlined-select-currency'
            select
            label='Select Safeguards'
            value={safeguards}
            onChange={handleChange}
            variant='outlined'>
            {safeguardsList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField> */}
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id='safeguards-label'>Select Safeguards</InputLabel>
          <Select
            labelId='safeguards-checkbox-label'
            id='safeguards-checkbox'
            multiple
            value={personName}
            onChange={handleChange}
            input={<Input />}
            renderValue={(selected) => (selected as string[]).join(', ')}
            MenuProps={MenuProps}>
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
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
            label='Primary Clickable with super long texts'
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
    maxWidth: 500,
  },
  buttonRoot: {
    width: 70,
    height: 40,
  },
}));
