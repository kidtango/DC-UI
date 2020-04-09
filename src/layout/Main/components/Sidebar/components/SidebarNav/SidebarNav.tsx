import React, { forwardRef } from 'react';
import {
  makeStyles,
  Theme,
  List,
  Button,
  ListItem,
  colors,
} from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';
import { HamburgerMenuIcon } from 'icons/HamburgerMenuIcon';

const CustomRouterLink = forwardRef((props: any, ref: any) => (
  <div ref={ref}>
    <RouterLink {...props} />
  </div>
));

interface Props {
  pages: { title: string; href: string; icon: JSX.Element }[];
  className?: string;
}

export const SidebarNav: React.FC<Props> = (props: Props) => {
  const { pages, className, ...rest } = props;
  const classes = useStyles();
  return (
    <List>
      <div style={{ marginBottom: '50px' }}>Menu</div>
      {pages.map((page) => (
        <ListItem className={classes.item} disableGutters key={page.title}>
          <Button
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={page.href}
          >
            <div className={classes.icon}>{page.icon}</div>
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    justifyContent: 'center',
    width: '100%',
    borderRadius: '0px',
    '&:hover': {
      borderLeft: '4px solid',
      borderLeftColor: theme.palette.secondary.main,
      '& $icon': {
        color: theme.palette.secondary.main,
      },
    },
  },
  icon: {
    color: theme.palette.primary.dark,
    width: 30,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    color: theme.palette.info.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.failure.main,
    },
  },
}));
