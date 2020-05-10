import _ from 'lodash';
import { RiskBucket } from 'view/Risk/models/risk';

export const mapMatrix = (riskBuckets: RiskBucket[], colorsMap: string[][]) => {
  if (!riskBuckets) return;

  let mappedMatrix: { [key: string]: {} } = {};

  if (riskBuckets && riskBuckets.length) {
    _.each(riskBuckets, (rb) => {
      if (rb) {
        // Have to modify index due to Chevron Risk Matrix being reverse in numberical order with 6 being lowest and 1 being highest
        let consequenceIdx = Math.abs(parseInt(rb.severity) - 6);
        let likelihoodIdx = Math.abs(parseInt(rb.likelihood) - 1);
        mappedMatrix[likelihoodIdx + ',' + consequenceIdx] = {
          ...rb,
          colorClass: colorsMap[likelihoodIdx][consequenceIdx],
        };
      }
    });
  }

  return mappedMatrix;
};
