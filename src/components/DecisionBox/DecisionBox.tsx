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
  inputForm?: JSX.Element;
  showForm: boolean | undefined;
}

export const DecisionBox: React.FC<DecisionBoxProps> = (
  props: DecisionBoxProps
) => {
  const {
    content,
    breadcrumbs,
    actionButtonTitle,
    inputForm,
    showForm,
  } = props;

  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.root}>
      <CollapsedBreadcrumbs />
      <Typography variant='body2' className={classes.content}>
        {content}
      </Typography>
      {actionButtonTitle && (
        <Button
          variant='contained'
          color='primary'
          className={classes.evalButton}
        >
          {actionButtonTitle}
        </Button>
      )}

      {showForm && inputForm}
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
  },
}));
