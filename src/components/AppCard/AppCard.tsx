import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SettingsIcon from '@material-ui/icons/Settings';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import { useTheme } from '@material-ui/core/styles';

export interface AppCardProps {
  domainTitle: string;
  appTitle: string;
  appIcon: JSX.Element;
  cardState: {
    isDisabled: boolean;
    isError: boolean;
  };
}

export const AppCard: React.FC<AppCardProps> = (props: AppCardProps) => {
  const { appIcon, domainTitle, appTitle, cardState } = props;
  const theme = useTheme();

  const classes = useStyles(props);

  return (
    <Card className={classes.root} elevation={2}>
      <Grid container>
        <Grid item container className={classes.mainContent}>
          <Grid item>
            <div className={classes.domainTitle}>{domainTitle}</div>
          </Grid>
          <Grid
            item
            container
            direction='row'
            wrap='nowrap'
            alignItems='center'
          >
            <Grid item className={classes.appIcon}>
              {appIcon}
            </Grid>
            <Grid item>
              <div className={classes.AppTitle}>{appTitle}</div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify='space-between' className={classes.settings}>
        <Grid item>
          <SettingsIcon fontSize='small' color='disabled' />
        </Grid>
        <Grid item>
          {!cardState.isDisabled && (
            <CheckCircleOutlineRoundedIcon
              fontSize='small'
              htmlColor={theme.palette.success.main}
            />
          )}
        </Grid>
      </Grid>
    </Card>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '210px',
    height: '125px',
    margin: '0px 0px 0px 0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.light,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  domainTitle: {
    color: (props: AppCardProps) => {
      return props.cardState.isDisabled
        ? theme.palette.text.disabled
        : theme.palette.text.secondary;
    },
    fontWeight: 600,
    fontSize: '12px',
    letterSpacing: '0.30px',
    lineHeight: '28px',
  },

  AppTitle: {
    color: (props: AppCardProps) => {
      return props.cardState.isDisabled
        ? theme.palette.text.disabled
        : theme.palette.text.primary;
    },
    fontSize: '18px',
    letterSpacing: '-1.0px',
    lineHeight: '16px',
    fontWeight: 600,
  },

  mainContent: {
    padding: '2px 10px',
  },
  settings: {
    padding: '0px 4px',
  },
  appIcon: {
    '& $svg': {
      '&:hover': {
        color: 'red',
      },
    },
  },
}));
