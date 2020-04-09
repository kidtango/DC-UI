import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link, Theme } from '@material-ui/core';
import { Classes } from '@material-ui/styles/mergeClasses/mergeClasses';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}));

interface Props {
  className?: String;
}

export const Footer: React.FC<Props> = (props: Props) => {
  const { className, ...rest } = props;

  const classes: Classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      &copy;
      <Typography>
        <Link>Devias IO</Link>
      </Typography>
      <Typography variant='caption'>
        Created with love for the environment. By designers and developers who
        love to work together in offices!
      </Typography>
    </div>
  );
};
