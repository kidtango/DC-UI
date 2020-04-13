import React from 'react';
import { makeStyles, Theme, List, ListItem } from '@material-ui/core';

import NavItem from './components';

interface Props {
  pages: {
    title: string;
    href: string;
    icon: JSX.Element;
    color: string;
  }[];
  className?: string;
}

export const SidebarNav: React.FC<Props> = (props: Props) => {
  const { pages, className, ...rest } = props;

  const classes = useStyles(pages);
  console.log(classes.root);
  return (
    <List className={classes.root}>
      {pages.map((page) => (
        <ListItem className={classes.item} disableGutters key={page.title}>
          <NavItem page={page} />
        </ListItem>
      ))}
    </List>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: (props: any) => props.color,
  },
  item: {
    display: 'flex',
    padding: '0 0',
    zIndex: 0,
  },
}));
