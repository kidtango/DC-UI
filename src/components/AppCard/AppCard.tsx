import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import SettingsIcon from '@material-ui/icons/Settings';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import { useTheme } from '@material-ui/core/styles';
import { useRTMContext } from 'view/RTMWellExecution/contexts/RTMContext';

export interface AppCardProps {
  domainTitle?: string;
  appTitle?: string;
  iconColor?: string;
  appIcon?: JSX.Element;
  cardState: {
    isDisabled?: boolean;
    isError?: boolean;
    isActive?: boolean;
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
          {!cardState.isDisabled && !cardState.isError && (
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
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 4,
    border: (props: AppCardProps) => {
      if (props.cardState.isActive) {
        return `2px solid #009DD9`;
      } else {
        return '0px';
      }
    },
    backgroundColor: (props: AppCardProps) => {
      if (props.cardState.isError) {
        return theme.palette.error.light;
      }

      return theme.palette.primary.light;
    },
    '&:hover': {
      backgroundColor: (props: AppCardProps) => {
        if (props.cardState.isError) {
          return theme.palette.error.dark;
        }

        return theme.palette.secondary.light;
      },
      '& $appIcon': {
        '& svg': {
          color: (props: AppCardProps) => {
            if (props.cardState.isError) {
              return theme.palette.error.main;
            }
            if (props.cardState.isDisabled) {
              return theme.palette.text.disabled;
            }
            return props.iconColor;
          },
        },
      },
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
        ? theme.palette.icon.inActive
        : theme.palette.icon.active;
    },
    fontSize: '18px',
    // letterSpacing: -1,
    lineHeight: '20px',
    fontWeight: 600,
  },

  mainContent: {
    padding: '0px 10px',
  },
  settings: {
    padding: '0px 4px',
  },
  appIcon: {
    '& $svg': {
      width: 52,
      height: 52,
      marginLeft: -10,
      marginRight: 1,
      color: (props: AppCardProps) => {
        if (props.cardState.isError) {
          return theme.palette.error.main;
        }

        if (props.cardState.isDisabled) {
          return theme.palette.text.disabled;
        }

        return theme.palette.icon.active;
      },
      '&:hover': {
        color: (props: AppCardProps) => {
          return props.iconColor;
        },
      },
    },
  },
}));
