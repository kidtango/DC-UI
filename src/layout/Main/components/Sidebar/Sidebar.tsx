import React from 'react';
import { makeStyles, styled } from '@material-ui/styles';
import { useTheme, Theme } from '@material-ui/core';

import { Classes } from '@material-ui/styles/mergeClasses/mergeClasses';

import { DrillAndCompletionIcon } from 'icons/DrillAndCompletionIcon';
import { RigAllocationIcon } from 'icons/RigAllocationIcon';
import { RTMIcon } from 'icons/RTMIcon';
import { StandardsIcon } from 'icons/StandardsIcon';
import { SidebarNav } from './components';
import { RiskIcon } from 'icons/RiskIcon';
import { HomeIcon } from 'icons/HomeIcon';

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
      color: '#009DD9',
    },
    {
      title: 'Drilling & Completion',
      href: '/drillingAndCompletion',
      icon: <DrillAndCompletionIcon fontSize='large' />,
      color: '#009DD9',
    },
    {
      title: 'Standards',
      href: '/standards',
      icon: <StandardsIcon fontSize='large' />,
      color: '#003653',
    },
    {
      title: 'Risk View',
      href: '/riskView',
      icon: <RiskIcon fontSize='large' />,
      color: '#8A3093',
    },
    {
      title: 'RTM for well execution',
      href: '/rtmWellExecution',
      icon: <RTMIcon fontSize='large' />,
      color: '#769231',
    },
    {
      title: 'Rig Allocation',
      href: '/rigAllocation',
      icon: <RigAllocationIcon fontSize='large' />,
      color: '#E5601F',
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
  minWidth: '65px',
  listStyle: 'none',
  background: '#DEDEDE',
  minHeight: '95vh',
  justifyContent: 'space-between',
  alignContent: 'left',
});
