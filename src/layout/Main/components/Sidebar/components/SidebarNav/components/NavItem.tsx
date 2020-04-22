import React, { forwardRef } from 'react';
import { makeStyles, Theme, Button } from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';

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
    <Tooltip
      title={page.title}
      placement='right'
      arrow
      classes={{ tooltip: classes.label }}
    >
      <Button
        activeClassName={classes.active}
        className={classes.button}
        component={CustomRouterLink}
        to={page.href}
      >
        <div className={classes.icon}>{page.icon}</div>
      </Button>
    </Tooltip>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    width: '70px',
    padding: '0 0',
    borderLeft: '4px solid #DEDEDE',
    borderRadius: '0px',
    '&:hover': {
      borderLeft: '4px solid',
      borderLeftColor: (props: { color: string }) => props.color,
      '& $icon': {
        color: (props: { color: string }) => props.color,
      },
    },
    '& $icon': {
      color: theme.palette.icon.sideBarIcon,
    },
  },
  icon: {
    color: (props: { color: string }) => props.color,
  },
  active: {
    '& $icon': {
      color: (props: { color: string }) => props.color,
    },
    borderLeft: (props: { color: string }) => {
      return `4px solid ${props.color}`;
    },
  },
  label: { fontSize: 16 },
}));
