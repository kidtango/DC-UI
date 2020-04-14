import React from 'react';
import { withStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { HamburgerMenuIcon } from 'icons/HamburgerMenuIcon';
import { IconButton } from '@material-ui/core';

const StyledMenu = withStyles({
  paper: {
    border: 'none',
    marginLeft: '0px',
    padding: '0',
    backgroundColor: '#DEDEDE',
    borderRadius: '.5px',
    boxShadow:
      '0 0px 0px 0 rgba(0,0,0,0.14), 0 0px 0px 0px rgba(0,0,0,0.12), 0px 1px 2px 1px rgba(0,0,0,0.20)',
  },
})((props: MenuProps) => (
  <Menu
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      // backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        // color: theme.palette.primary.contrastText,
      },
    },
  },
}))(MenuItem);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: '0px',
    marginBottom: theme.spacing(4),
    width: '100%',
    '&:hover': {
      color: '#009DD9',
    },
  },
}));

export function SidebarTopMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const classes = useStyles();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button color='primary' onClick={handleClick} className={classes.root}>
        <HamburgerMenuIcon fontSize='large' />
      </Button>
      <StyledMenu
        id='customized-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <SendIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText primary='Sent mail' />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText primary='Drafts' />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <InboxIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText primary='Inbox' />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
