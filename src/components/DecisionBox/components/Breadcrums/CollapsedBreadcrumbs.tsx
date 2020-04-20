/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export function CollapsedBreadcrumbs() {
  const classes = useStyles();

  return (
    <Breadcrumbs maxItems={3} aria-label='breadcrumb' className={classes.root}>
      <Link color='inherit' href='#' onClick={handleClick}>
        System Lab Application Portal
      </Link>
      <Link color='inherit' href='#' onClick={handleClick}>
        Wells System Suite
      </Link>
    </Breadcrumbs>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: { color: theme.palette.primary.main },
}));
