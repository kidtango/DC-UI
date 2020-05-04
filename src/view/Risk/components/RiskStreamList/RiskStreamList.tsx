import React, { useRef, useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Collapse from '@material-ui/core/Collapse';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Tooltip from '@material-ui/core/Tooltip';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormLabel from '@material-ui/core/FormLabel';
import _ from 'lodash';
import UpwardIcon from '@material-ui/icons/ArrowUpward';
import DownwardIcon from '@material-ui/icons/ArrowDownward';
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import Chip from '@material-ui/core/Chip';

import './riskStreamList.css';
import { makeStyles } from '@material-ui/core';
import './riskStreamList.css';

interface RiskStreamListProps {
  selectedRiskBucket?: {
    cause: string;
    color: string;
    confidenceLevel: number;
    consequence: string;
    description: string;
    lowConfidence: boolean;
    severity: number;
    likelihood: number;
    risk: {
      id: string;
      cause: string;
      consequence: string;
      description: string;
      title: string;
    };
  }[];
}

const RiskStreamList: React.FC<RiskStreamListProps> = (
  props: RiskStreamListProps
) => {
  const { selectedRiskBucket } = props;
  console.log('selectedRiskBucket', selectedRiskBucket);
  // GLobal state from RiskContext
  const [order, setOrder] = useState<'asc' | 'dsc'>();

  //Local contexts/state
  const [filterExpanded] = useState(false);
  const [riskTitles, setRiskTitles] = useState([]);
  const [riskConsequences, setRiskConsequences] = useState([]);
  const [riskCauses, setRiskCauses] = useState([]);
  const [riskDescriptions, setRiskDescriptions] = useState([]);

  // Global state
  const classes = useStyles();

  useEffect(() => {
    window.addEventListener('scroll', forceCheck);
  });

  // const toggleOrder = () => {
  //   if (order === 'asc') {
  //     setOrder('desc');
  //     setSelectedRiskBuckets(
  //       _.orderBy(selectedRiskBuckets, ['confidenceLevel'], ['desc'])
  //     );
  //   } else {
  //     setOrder('asc');
  //     setSelectedRiskBuckets(
  //       _.orderBy(selectedRiskBuckets, ['confidenceLevel'], ['asc'])
  //     );
  //   }
  // };

  const toggleExpandRiskDetail = (
    riskDetailName: any,
    idx: number,
    setRiskDetailName: any
  ) => {
    const riskDetailItem = [];
    riskDetailItem[idx] = !riskDetailName[idx];
    setRiskDetailName(riskDetailItem);
  };

  const scrollContainerRef = useRef<any>(null);

  // let stats = getStats(mappedMatrix) || {};

  const id = 'simple-popper';

  // console.log('RiskStreamList -> mappedMatrix', mappedMatrix);
  // console.log('RiskStreamList -> selectedRiskBuckets', selectedRiskBuckets);

  // if (!selectedRiskBuckets && mappedMatrix) {
  //   let currentRisks = [];

  //   _.each(mappedMatrix, rb => {
  //     _.map(rb.risks, r => {
  //       currentRisks.push({ ...r, color: rb.colorClass });
  //     });
  //   });
  //   setSelectedRiskBuckets(currentRisks);
  // }

  // const prepareText = (text) => text.replace(/[^\x20-\x7E]+/g, '');

  return (
    <div className='riskStreamList'>
      <Paper className={'risksListContainer'}>
        <Paper className={'coloredPaper headerPaper'}>
          <div className='titleContainer'>
            <div className='statistics'>
              <div className='stat total'>
                {/* (
                {stats.level6 +
                  stats.level7 +
                  stats.level8 +
                  stats.level9 +
                  stats.level10}
                ) */}
                120
              </div>
              <div className='stat level10'>12</div>
              <div className='stat level9'>25</div>
              <div className='stat level8'>5</div>
              <div className='stat level7'>80</div>
              <div className='stat level6'>2</div>
              <div className='stat lowConfidence'>56</div>
            </div>
          </div>
          <div className='filters'>
            <div className='sortAndOrder'>
              <Button size='small' className='orderByButton'></Button>
              <Button size='small' className={`ascDescButton ${order}`}>
                <UpwardIcon className='upArrow' />
                <DownwardIcon className='downArrow' />
              </Button>
            </div>
          </div>
          <div className='clear'></div>
          <Collapse in={true} collapsedHeight='0px'>
            <Paper className='filterControls'>
              <form className={classes.root} autoComplete='off'>
                <Grid container>
                  {/* <Grid item xs={6}>
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor='age-simple'>Sorty by</InputLabel>
                      <Select
                        value={'5'}
                        inputProps={{
                          name: 'age',
                          id: 'age-simple'
                        }}
                      >
                        <MenuItem value=''>
                          <em>Risk</em>
                        </MenuItem>
                        <MenuItem value={10}>Severity</MenuItem>
                        <MenuItem value={20}>Probability</MenuItem>
                        <MenuItem value={30}>Confidence</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid> */}
                  <Grid item xs={6}>
                    {/* <FormControl className={classes.formControl} xs={6}>
                      <FormLabel component='legend'>Order</FormLabel>

                      <RadioGroup
                        aria-label='Order'
                        name='order'
                        className={'radioGroup'}
                        value={`${order}`}
                        onClick={() => toggleOrder()}>
                        <Grid container>
                          <Grid item xs={6}>
                            <FormControlLabel
                              value='asc'
                              control={<Radio />}
                              label='Asc'
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <FormControlLabel
                              value='desc'
                              control={<Radio />}
                              label='Desc'
                            />
                          </Grid>
                        </Grid>
                      </RadioGroup>
                    </FormControl> */}
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Collapse>
        </Paper>
        <div
          className='streamList scrollableFullHeighPaper'
          ref={scrollContainerRef}>
          {!selectedRiskBucket && (
            <p>Please select a bucket of risk to display a list of risks</p>
          )}
          {selectedRiskBucket &&
            _.map(selectedRiskBucket, (risk, idx) => {
              return (
                <LazyLoad
                  height={209}
                  offset={1500}
                  throttle={800}
                  scroll
                  overflow
                  scrollContainer={scrollContainerRef.current}
                  key={idx}
                  unmountIfInvisible={true}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Paper
                        className={`${risk.color} coloredPaper ${
                          risk.lowConfidence ? 'lowConfidence' : ''
                        }`}>
                        <div className='description'>
                          <div
                            aria-describedby={id}
                            className={classes.matrixScores}>
                            <div className={classes.matrixCol}>
                              <b>{risk.likelihood}</b>
                            </div>
                            <Chip
                              // icon={<FaceIcon />}
                              label={`${Math.trunc(
                                risk.confidenceLevel * 100
                              )}%`}
                              // className={
                              //   classes[
                              //     `${
                              //       risk.lowConfidence
                              //         ? 'lowConfidence'
                              //         : risk.color
                              //     }`
                              //   ]
                              // }
                            />
                            <div>
                              <b>{risk.severity}</b>
                            </div>
                          </div>
                          <Collapse collapsedHeight='62px' className='title'>
                            {/* <Highlighter
                              input={prepareText(r.title)}
                              keywords={wordsToHighlight.title}
                            /> */}
                            {/* <Chip
                              label={`${Math.trunc(
                                r.confidenceLevel * 100
                              )}% confidence`}
                              clickable
                              color={r.lowConfidence ? 'secondary' : 'primary'}
                              variant='outlined'
                            /> */}
                          </Collapse>
                          <Collapse
                            collapsedHeight='36px'
                            className='riskWordsMatched'>
                            <b>Description:</b>{' '}
                            {/* <Highlighter
                              input={prepareText(r.description)}
                              keywords={wordsToHighlight.description}
                            /> */}
                            {risk.description}
                          </Collapse>
                        </div>
                      </Paper>
                    </Grid>
                  </Grid>
                </LazyLoad>
              );
            })}
        </div>
      </Paper>
    </div>
  );
};

export default RiskStreamList;

const useStyles = makeStyles((theme) => ({
  root: {},
  matrixScores: {},
  matrixCol: {},
}));
