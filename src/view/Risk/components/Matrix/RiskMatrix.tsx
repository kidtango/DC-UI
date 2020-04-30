import React, { useState } from 'react';
import _ from 'lodash';
import matrixConfig from './matrixConfig';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import './riskMatrix.css';
import { generateRbClassesTemplate } from './generateRbClassesTemplate';

interface RiskMatrixProps {
  mappedMatrix?: any;
  setOrder?: React.Dispatch<React.SetStateAction<string>>;
  setSelectedRiskBuckets?: React.Dispatch<React.SetStateAction<any>>;
  error?: boolean;
}

const RiskMatrix = (props: RiskMatrixProps) => {
  const { mappedMatrix, setOrder, setSelectedRiskBuckets, error } = props;
  const rbClasses: { [key: string]: string } = generateRbClassesTemplate();

  const selectRiskBucket = (likelihoodIdx: number, consequenceIdx: number) => {
    const mappedBucketKey: any = likelihoodIdx + ',' + consequenceIdx;
    const bucket = mappedMatrix[mappedBucketKey];

    setOrder!('asc');
    //Set risk bucket(s) on global state
    setSelectedRiskBuckets!(
      _.orderBy(
        _.map(bucket.risks, (r) => {
          return { ...r, color: bucket.colorClass };
        }),
        ['confidenceLevel'],
        ['asc']
      )
    );
  };

  const getFilledBucked = (likelihoodIdx: number, consequenceIdx: number) => {
    if (!mappedMatrix) return;

    const emptyBucket = {
      risks: [],
      filteredNumberOfLowConfidenceRisks: 0,
      filteredAverageConfidenceLevel: 0,
    };

    const mappedBucketKey = likelihoodIdx + ',' + consequenceIdx;
    const bucket = mappedMatrix[mappedBucketKey] || emptyBucket;

    const bucketColor = mappedMatrix[mappedBucketKey]
      ? mappedMatrix[mappedBucketKey].colorClass
      : matrixConfig.matrix6x6.matMapColors[likelihoodIdx][consequenceIdx];

    return (
      <div
        key={mappedBucketKey}
        // className={clsx(
        //   rbClasses[mappedBucketKey] ? rbClasses[mappedBucketKey] : '',
        //   classes.matrixCell,
        //   classes[bucketColor]
        // )}
        className={`${
          rbClasses[mappedBucketKey] || ''
        } matrixCell ${bucketColor}`}
        onClick={
          bucket.risks.length
            ? () => selectRiskBucket(likelihoodIdx, consequenceIdx)
            : () => {}
        }>
        {bucket ? (
          <React.Fragment>
            {bucket.filteredNumberOfLowConfidenceRisks > 0 && (
              <div className='lowPresicion'>
                {bucket.filteredNumberOfLowConfidenceRisks}
              </div>
            )}
            <div className='ocurrences'>
              {bucket.filteredNumberOfRisks || 0}
            </div>
            <div className='certainty'>
              {bucket.filteredAverageConfidenceLevel || '0%'}
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className='ocurrences'>0</div>
            <div className='certainty'>0%</div>
          </React.Fragment>
        )}
      </div>
    );
  };

  if (error)
    return (
      <div className='riskMatrix'>
        Something went wrong..! Please try refreshing the browser to reset
      </div>
    );

  return (
    <div className='riskMatrix'>
      <div className='riskMatrixChart'>
        <div className='consequenceTitle'>
          <div className='arrowIcon'>
            <ArrowBackIcon /> Decreasing Likelihood
          </div>
        </div>

        <Grid item xs={12} className='matrixRow'>
          <div className='rowTitle'>1</div>
          {getFilledBucked(0, 0)}
          {getFilledBucked(0, 1)}
          {getFilledBucked(0, 2)}
          {getFilledBucked(0, 3)}
          {getFilledBucked(0, 4)}
          {getFilledBucked(0, 5)}
        </Grid>
        <Grid item xs={12} className='matrixRow'>
          <div className='rowTitle'>2</div>
          {getFilledBucked(1, 0)}
          {getFilledBucked(1, 1)}
          {getFilledBucked(1, 2)}
          {getFilledBucked(1, 3)}
          {getFilledBucked(1, 4)}
          {getFilledBucked(1, 5)}
        </Grid>
        <Grid item xs={12} className='matrixRow'>
          <div className='rowTitle'>3</div>
          {getFilledBucked(2, 0)}
          {getFilledBucked(2, 1)}
          {getFilledBucked(2, 2)}
          {getFilledBucked(2, 3)}
          {getFilledBucked(2, 4)}
          {getFilledBucked(2, 5)}
        </Grid>
        <Grid item xs={12} className='matrixRow'>
          <div className='rowTitle'>4</div>
          {getFilledBucked(3, 0)}
          {getFilledBucked(3, 1)}
          {getFilledBucked(3, 2)}
          {getFilledBucked(3, 3)}
          {getFilledBucked(3, 4)}
          {getFilledBucked(3, 5)}
        </Grid>
        <Grid item xs={12} className='matrixRow'>
          <div className='rowTitle'>5</div>
          {getFilledBucked(4, 0)}
          {getFilledBucked(4, 1)}
          {getFilledBucked(4, 2)}
          {getFilledBucked(4, 3)}
          {getFilledBucked(4, 4)}
          {getFilledBucked(4, 5)}
        </Grid>
        <Grid item xs={12} className='matrixRow'>
          <div className='rowTitle'>6</div>
          {getFilledBucked(5, 0)}
          {getFilledBucked(5, 1)}
          {getFilledBucked(5, 2)}
          {getFilledBucked(5, 3)}
          {getFilledBucked(5, 4)}
          {getFilledBucked(5, 5)}
        </Grid>
        <Grid item xs={12} className='matrixRow headerRow'>
          <div className='colTitle'>6</div>
          <div className='colTitle'>5</div>
          <div className='colTitle'>4</div>
          <div className='colTitle'>3</div>
          <div className='colTitle'>2</div>
          <div className='colTitle'>1</div>
        </Grid>
      </div>
      <div className='consequenceBlock'>
        <div className='arrowIcon'>
          <ArrowBackIcon />
        </div>

        <div className='consquenceTitle'>Decreasing Consequence</div>
      </div>
    </div>
  );
};

export default RiskMatrix;
