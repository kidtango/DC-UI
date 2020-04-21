import React from 'react';
import {
  Paper,
  makeStyles,
  Theme,
  Typography,
  Button,
} from '@material-ui/core';
import CollapsedBreadcrumbs from './components';

export interface DecisionBoxProps {
  breadcrumbs?: string[];
  content?: string;
  actionButtonTitle?: string;
}

export const DecisionBox: React.FC<DecisionBoxProps> = (
  props: DecisionBoxProps
) => {
  const { content, breadcrumbs, actionButtonTitle } = props;

  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.root}>
      <CollapsedBreadcrumbs />
      <Typography variant='body2' className={classes.content}>
        {content}
      </Typography>
      {actionButtonTitle && (
        <Button className={classes.evalButton}>{actionButtonTitle}</Button>
      )}
    </Paper>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: 135,
    minWidth: '100%',
    padding: '14px 22px',
    marginBottom: 15,
  },
  content: {
    marginTop: '9px',
  },
  evalButton: {
    marginTop: '20px',
    color: 'white',
    backgroundColor: '#0066B2',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#065694',
    },
  },
}));
