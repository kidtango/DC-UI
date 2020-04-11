import React from 'react';
import clsx from 'clsx';
import { makeStyles, styled } from '@material-ui/styles';
import {
  Divider,
  Drawer,
  useTheme,
  Theme,
  DrawerProps,
  colors,
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
import theme from 'theme';
import SidebarTopMenu from './components/SidebarTopMenu';

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
    <SideNav>
      <div>
        <SidebarTopMenu />
        <SidebarNav className={classes.nav} pages={pages} />
      </div>

      {/* <div>Settings</div> */}
    </SideNav>
  );
};

const useStyles = makeStyles((theme: Theme) => ({}));

const SideNav = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minWidth: 40,
  listStyle: 'none',
  background: colors.grey[300],
  minHeight: '100vh',
  justifyContent: 'space-between',
});
