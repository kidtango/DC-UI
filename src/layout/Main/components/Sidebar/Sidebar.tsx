import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Divider,
  Drawer,
  useTheme,
  Theme,
  DrawerProps,
} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Classes } from '@material-ui/styles/mergeClasses/mergeClasses';
import { IconHelpOutline } from '../../../../icons/IconHelpOutline';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import { DrillAndCompletionIcon } from 'icons/DrillAndCompletionIcon';
import { RigAllocationIcon } from 'icons/RigAllocationIcon';
import { RTMIcon } from 'icons/RTMIcon';
import { StandardsIcon } from 'icons/StandardsIcon';
import { SidebarNav } from './components';
import { RiskIcon } from 'icons/RiskIcon';
import { HomeIcon } from 'icons/HomeIcon';
import { HamburgerMenuIcon } from 'icons/HamburgerMenuIcon';

interface Props {
  variant?: 'permanent' | 'persistent' | 'temporary';
  onClose?: (reason: 'backdropClick' | 'escapeKeyDown') => void;
  className?: string;
  open: boolean;
}

export const Sidebar: React.FC<Props> = (props: Props) => {
  const { variant, onClose, className, open, ...rest } = props;

  const classes: Classes = useStyles();
  const theme: Theme = useTheme();

  const pages = [
    {
      title: 'Home',
      href: '/home',
      icon: <HomeIcon fontSize='large' />,
    },
    {
      title: 'Drilling & Completion',
      href: '/drillingAndCompletion',
      icon: <DrillAndCompletionIcon fontSize='large' />,
    },
    {
      title: 'Standards',
      href: '/standards',
      icon: <StandardsIcon fontSize='large' />,
    },
    {
      title: 'Risk View',
      href: '/riskView',
      icon: <RiskIcon fontSize='large' />,
    },
    {
      title: 'RTM for well execution',
      href: '/rtmWellExecution',
      icon: <RTMIcon fontSize='large' />,
    },
    {
      title: 'Rig Allocation',
      href: '/rigAllocation',
      icon: <RigAllocationIcon fontSize='large' />,
    },
  ];

  return (
    <Drawer
      anchor='left'
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <SidebarNav className={classes.nav} pages={pages} />
        <div>Settings</div>
      </div>
    </Drawer>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: 50,
  },
  root: {
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
  iconButton: {
    borderLeftWidth: '4px',
    borderLeftStyle: 'solid',
    marginBottom: '4px',
    borderLeftColor: 'transparent',
    '&:hover': {
      borderLeftWidth: '4px',
      borderLeftStyle: 'solid',
      marginBottom: '4px',
      borderLeftColor: theme.palette.secondary.main,
      icon: 'blue',
    },
  },
}));
