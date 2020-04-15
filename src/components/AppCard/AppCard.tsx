import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SettingsIcon from '@material-ui/icons/Settings';
import { DrillAndCompletionIcon } from 'icons/DrillAndCompletionIcon';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import { useTheme } from '@material-ui/core/styles';

export interface AppCardProps {
  domainTitle: string;
  appTitle: string;
  appIcon: JSX.Element;
}

export const AppCard: React.FC<AppCardProps> = (props: AppCardProps) => {
  const { appIcon, domainTitle, appTitle } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root} elevation={2}>
      <Grid container>
        <Grid item container className={classes.mainContent}>
          <Grid item>
            <Typography variant='h3' className={classes.domainTitle}>
              {domainTitle}
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction='row'
            wrap='nowrap'
            alignItems='center'
          >
            <Grid item>{appIcon}</Grid>
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
          <CheckCircleOutlineRoundedIcon
            fontSize='small'
            htmlColor={theme.palette.success.main}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '240px',
    height: '125px',
    margin: '0px 20px 10px 0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  domainTitle: {
    // margin: '0px 0px 0px 0px',
  },

  AppTitle: {
    color: theme.palette.text.primary,
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
}));
