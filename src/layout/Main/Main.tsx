import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery, Theme } from '@material-ui/core';

import { Classes } from '@material-ui/styles/mergeClasses/mergeClasses';
import { Sidebar, Footer } from './components';

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
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop,
      })}
    >
      {/* <Topbar onSidebarOpen={handleSidebarOpen} />
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>
       
        <Footer />
      </main> */}
      {/* <Topbar
        variant={isDesktop ? 'persistent' : 'temporary'}
        open={shouldOpenSidebar}
      /> */}

      <Sidebar
        variant={isDesktop ? 'persistent' : 'temporary'}
        open={shouldOpenSidebar}
      />
      <main className={classes.content}>
        {children}
        <Footer />
      </main>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64,
    },
  },
  shiftContent: {
    paddingLeft: 240,
  },
  content: {
    height: '100%',
  },
}));
