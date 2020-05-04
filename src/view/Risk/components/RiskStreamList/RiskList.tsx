import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Paper, ListItemAvatar, Avatar, List, Grid } from '@material-ui/core';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const RiskList = (props: ListChildComponentProps) => {
  const { index, style, data } = props;
  console.log('RiskList -> index', index);
  console.log('RiskList -> data', data);
  const classes = useStyles();

  return (
    <Paper
      style={style}
      key={index}
      className={classes.root}
      variant='outlined'>
      <div className={classes.description}>
        <b>Description:</b> {data[index]}
      </div>
    </Paper>
  );
};

export default RiskList;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderLeft: '4px solid orange',
      width: '100%',
      height: '100%',
      borderRadius: '2px',
    },
    list: {
      borderLeft: '8px solid orange',
    },
    description: {
      textAlign: 'left',
      padding: '0px 2px 2px 2px',
    },
  })
);
