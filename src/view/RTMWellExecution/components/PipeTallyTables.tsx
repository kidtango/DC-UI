import React from "react";
import { withStyles, makeStyles, Theme, Grid } from "@material-ui/core";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";

export interface PipeTallyTablesProps {
  pipeTally: {
    profileNumber: string;
    pipes: {
      id: string;
      pipeOrder: string;
      pipeWeight: number;
      pipeHeight: number;
    }[];
  };
  profileColor: string;
}

export default function PipeTallyTables(props: PipeTallyTablesProps) {
  const { pipeTally } = props;

  const classes = useStyles(props);

  const [checked, setChecked] = React.useState(false);
  const [expanded, setExpanded] = React.useState<string | false>();

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    newExpanded: boolean
  ) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleCheckedBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Paper className={classes.root}>
      <ExpansionPanel
        square={false}
        expanded={expanded === "panel"}
        onChange={handleChange("panel")}>
        <ExpansionPanelSummary>
          <Grid container alignItems='center' spacing={1}>
            <Grid item>
              <Checkbox
                checked={checked}
                onChange={handleCheckedBox}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </Grid>

            <Grid item>
              <div className={classes.panelTitle}>PIPE PROFILE:</div>
            </Grid>
            <Grid item>
              <div className={classes.pipeProfileNumber}>
                {pipeTally.profileNumber}
              </div>
            </Grid>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TableContainer className={classes.table}>
            <Table className={classes.table} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='center'>PIPE ID</TableCell>
                  <TableCell align='center'>PIPE ORDER</TableCell>
                  <TableCell align='center'>
                    PIPE WEIGHT&nbsp;(lbs/ft)
                  </TableCell>
                  <TableCell align='center'>PIPE HEIGHT*</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pipeTally &&
                  pipeTally.pipes.map((pipe) => (
                    <TableRow key={pipe.id}>
                      <TableCell align='center'>{pipe.id}</TableCell>
                      <TableCell align='center'>{pipe.pipeOrder}</TableCell>
                      <TableCell align='center'>{pipe.pipeWeight}</TableCell>
                      <TableCell align='center'>{pipe.pipeHeight}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Paper>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: { marginBottom: theme.spacing(1), minWidth: "100%" },

  panelTitle: {
    fontSize: 16,
    letterSpacing: "-.5px",
    lineHeight: "20px",
    fontWeight: 600,
  },
  pipeProfileNumber: {
    background: (props: PipeTallyTablesProps) => {
      return props.profileColor;
    },
    padding: "0px 4px 0px 4px",
    borderRadius: "5px",
    fontWeight: 600,
  },
  table: { minWidth: "100%" },
}));

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    borderTop: `4px solid #009DD9`,
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .08)",
    borderBottom: "2px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    maxHeight: 20,
    "&$expanded": {
      maxHeight: 20,
    },
  },
  content: {},
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: { padding: 0 },
}))(MuiExpansionPanelDetails);
