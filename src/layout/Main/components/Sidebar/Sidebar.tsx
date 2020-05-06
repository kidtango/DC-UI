import React from 'react';
import { makeStyles, styled } from '@material-ui/styles';
import { useTheme, Theme } from '@material-ui/core';

import { Classes } from '@material-ui/styles/mergeClasses/mergeClasses';

import { WellsSystemSuiteIcon } from 'icons/WellsSystemSuiteIcon';
import { RigAllocationIcon } from 'icons/RigAllocationIcon';
import { RTMIcon } from 'icons/RTMIcon';
import { StandardsIcon } from 'icons/StandardsIcon';
import { SidebarNav, BottomNavItems, SidebarTopMenu } from './components';
import { RiskIcon } from 'icons/RiskIcon';
import { HomeIcon } from 'icons/HomeIcon';

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
      color: '#009DD9',
    },
    {
      title: 'Drilling & Completion',
      href: '/WellsSystemSuiteIcon',
      icon: <WellsSystemSuiteIcon fontSize='large' />,
      color: theme.palette.icon.wells,
    },
    {
      title: 'Standards',
      href: '/standards',
      icon: <StandardsIcon fontSize='large' />,
      color: theme.palette.icon.standards,
    },
    {
      title: 'Risk View',
      href: '/RiskView',
      icon: <RiskIcon fontSize='large' />,
      color: theme.palette.icon.risk,
    },
    {
      title: 'RTM for well execution',
      href: '/RTMWellExecution',
      icon: <RTMIcon fontSize='large' />,
      color: theme.palette.icon.RTM,
    },
    {
      title: 'Rig Allocation',
      href: '/rigAllocation',
      icon: <RigAllocationIcon fontSize='large' />,
      color: theme.palette.icon.rigAllocation,
    },
  ];

  return (
    <SideNav>
      <div>
        <SidebarTopMenu />
        <SidebarNav className={classes.nav} pages={pages} />
      </div>

      <div className={classes.settings}>
        <BottomNavItems />
      </div>
    </SideNav>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  settings: {
    alignItems: 'center',
  },
}));

const SideNav = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '70px',
  listStyle: 'none',
  background: '#DEDEDE',
  minHeight: '95vh',
  justifyContent: 'space-between',
  alignContent: 'center',
});
