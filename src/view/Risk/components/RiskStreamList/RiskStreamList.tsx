import React, { useRef, useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Collapse from '@material-ui/core/Collapse';
import _ from 'lodash';
import UpwardIcon from '@material-ui/icons/ArrowUpward';
import DownwardIcon from '@material-ui/icons/ArrowDownward';
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import './riskStreamList.css';
import { makeStyles } from '@material-ui/core';
import './riskStreamList.css';
import clsx from 'clsx';

export interface RiskStreamListProps {
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
  // GLobal state from RiskContext
  const [order, setOrder] = useState<'asc' | 'dsc'>('asc');

  //Local contexts/state
  const [riskDescriptions, setRiskDescriptions] = useState<
    {
      [key: number]: boolean;
    }[]
  >([]);

  // Global state
  const classes: any = useStyles();

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
    riskDetailNames: {
      [key: number]: boolean;
    }[],
    idx: number,
    setRiskDetailName: React.Dispatch<
      React.SetStateAction<
        {
          [key: number]: boolean;
        }[]
      >
    >
  ) => {
    const riskDetailItems: any = [];
    riskDetailItems[idx] = !riskDetailNames[idx];
    setRiskDetailName(riskDetailItems);
  };

  const scrollContainerRef = useRef<any>(null);

  // let stats = getStats(mappedMatrix) || {};

  const id = 'simple-popper';

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
      <div className='risksListContainer'>
        {/* Header Section */}
        <div className={classes.header}>
          <Paper elevation={2} className={'coloredPaper headerPaper'}>
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
          </Paper>
        </div>

        {/* Content section */}
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
                    <Grid item xs={12} className={classes.riskDetail}>
                      <Paper
                        elevation={2}
                        className={`${risk.color} coloredPaper ${
                          risk.lowConfidence ? 'lowConfidence' : ''
                        }`}>
                        <div
                          className='description'
                          onClick={() =>
                            toggleExpandRiskDetail(
                              riskDescriptions,
                              idx,
                              setRiskDescriptions
                            )
                          }>
                          <div
                            aria-describedby={id}
                            className={classes.matrixScores}>
                            <div className={classes.matrixCol}>
                              {risk.likelihood}
                            </div>
                            <div
                              className={clsx(
                                classes[
                                  `${
                                    risk.lowConfidence
                                      ? 'lowConfidence'
                                      : risk.color
                                  }`
                                ],
                                classes.miniMatrix
                              )}>
                              <div className={classes.matrixContent}>
                                {`${Math.trunc(risk.confidenceLevel * 100)}%`}
                              </div>
                            </div>
                            <div className={classes.matrixRow}>
                              {risk.severity}
                            </div>
                          </div>
                          <Collapse
                            collapsedHeight='62px'
                            className='title'></Collapse>

                          <Collapse
                            component={'div'}
                            in={!!riskDescriptions[idx]}
                            timeout='auto'
                            collapsedHeight='62px'
                            className='riskWordsMatched'>
                            <b>Description:</b> {risk.description}
                          </Collapse>
                        </div>
                      </Paper>
                    </Grid>
                  </Grid>
                </LazyLoad>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RiskStreamList;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  header: {
    marginBottom: 4,
  },
  riskDetail: { cursor: 'pointer' },
  miniMatrix: {
    position: 'relative',
    display: 'inline-block',
    borderRadius: '6px',
    width: '45px',
    height: '50px',
    fontWeight: 'bold',
    fontSize: '15px',
    padding: '2px',
    verticalAlign: 'middle',
    textAlign: 'center',
  },
  matrixContent: { marginTop: '30%' },
  matrixRow: { fontSize: '12px', marginLeft: '6px' },
  matrixCol: {
    marginRight: '3px',
    display: 'inline-block',
    fontSize: '12px',
  },
  matrixScores: {
    display: 'block',
    float: 'right',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: '3px',
    marginRight: '3px',
  },
  coloredPaper: {
    borderLeft: 'red 8px solid',
  },
  level6: {
    backgroundColor: '#FFFC53',
  },
  level7: {
    backgroundColor: '#EDF76D',
  },
  level8: {
    backgroundColor: '#E2FF5F',
  },
  level9: {
    backgroundColor: '#B5FC7B',
  },
  level10: {
    backgroundColor: '#52ED82',
  },
  lowConfidence: {
    backgroundColor: '#F00',
    color: 'white',
  },
}));
