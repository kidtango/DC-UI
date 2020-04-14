import React, { forwardRef } from 'react';
import { makeStyles, Theme, Button } from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';

const CustomRouterLink = forwardRef((props: any, ref: any) => (
  <div ref={ref}>
    <RouterLink {...props} />
  </div>
));

interface Props {
  page: {
    title: string;
    href: string;
    icon: JSX.Element;
    color: string;
  };
}

export const NavItem: React.FC<Props> = (props: Props) => {
  const { page } = props;
  const classes = useStyles(page);

  return (
    <Button
      activeClassName={classes.active}
      className={classes.button}
      component={CustomRouterLink}
      to={page.href}
    >
      <div className={classes.icon}>{page.icon}</div>
    </Button>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    width: '100%',
    padding: '0 0',
    borderRadius: '0px',
    '&:hover': {
      borderLeft: '5px solid',
      borderLeftColor: (props: { color: string }) => props.color,
      '& $icon': {
        color: (props: { color: string }) => props.color,
      },
    },
    '& $icon': {
      color: theme.palette.primary.main,
    },
  },
  icon: { color: (props: { color: string }) => props.color },
  active: {
    '& $icon': {
      color: (props: { color: string }) => props.color,
    },
  },
}));
