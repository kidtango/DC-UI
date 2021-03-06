import React from 'react';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Paper from '@material-ui/core/Paper';
import { withStyles, Theme, makeStyles } from '@material-ui/core';

export interface CustomizedPanelProps {
  children: React.ReactNode;
  title: string;
  panelName: string;
  disclaimer?: string;
}

const CustomizedPanel = (props: CustomizedPanelProps) => {
  const { title, children, panelName, disclaimer } = props;

  const classes = useStyles();

  const [expanded, setExpanded] = React.useState<string | true>(panelName);

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    newExpanded: boolean
  ) => {
    setExpanded(newExpanded ? panel : true);
  };

  return (
    <Paper className={classes.root}>
      <ExpansionPanel
        square={false}
        expanded={expanded === panelName}
        onChange={handleChange(panelName)}>
        <ExpansionPanelSummary
          aria-controls='panel1d-content'
          id='panel1d-header'>
          <div className={classes.panelTitle}>{title}</div>
          <div className={classes.disclaimer}>{disclaimer}</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
      </ExpansionPanel>
    </Paper>
  );
};

export default CustomizedPanel;

const useStyles = makeStyles((theme: Theme) => ({
  root: { marginBottom: theme.spacing(2) },
  panelTitle: {
    fontSize: 16,
    letterSpacing: -0.5,
    lineHeight: '20px',
    fontWeight: 600,
    marginRight: 'auto',
  },
  disclaimer: {
    fontSize: 16,
    letterSpacing: -1,
    lineHeight: '20px',
    fontWeight: 600,
    marginRignt: 'auto',
    color: theme.palette.error.main,
  },
}));

const ExpansionPanel = withStyles((theme) => ({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    borderTop: `4px solid #009DD9`,
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
}))(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    display: 'flex',
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,

    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    // padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);
