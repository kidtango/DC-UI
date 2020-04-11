import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery, Theme } from '@material-ui/core';

import { Classes } from '@material-ui/styles/mergeClasses/mergeClasses';
import { Sidebar } from './components';

interface Props {
  children: React.ReactNode;
}

export const Main: React.FC<Props> = (props: Props) => {
  const { children } = props;

  const classes: Classes = useStyles();
  const theme: Theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState<boolean>(true);

  // const handleSidebarOpen = () => {
  //   setOpenSidebar(true);
  // };

  // const handleSidebarClose = () => {
  //   setOpenSidebar(false);
  // };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  console.log('isDesktop', isDesktop);

  return (
    <div className={classes.root}>
      <Sidebar
        variant={isDesktop ? 'persistent' : 'temporary'}
        open={shouldOpenSidebar}
      />

      <main className={classes.content}>
        {children}
        {/* <Footer /> */}
      </main>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // [theme.breakpoints.up('sm')]: {
    //   paddingTop: 64,
    // },
    display: 'flex',
    flexDirection: 'row',
    margin: '2rem auto',
    boxShadow: '0 2rem 6rem rgba(0, 0, 0, 0.3);',
    maxHeight: '98%',
    minHeight: '50rem',
    maxWidth: '98%',
    borderRadius: '0.5rem',
    backgroundColor: theme.palette.primary.light,

    overflow: 'hidden',
  },

  content: {
    flex: 1,
  },
}));
