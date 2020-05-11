import _ from 'lodash';
import { RiskBucket } from 'view/Risk/models/risk';

export const mapMatrix = (riskBuckets: RiskBucket[], colorsMap: string[][]) => {
  if (!riskBuckets) return;

  const mappedMatrix: { [key: string]: {} } = {};

  if (riskBuckets && riskBuckets.length) {
    _.each(riskBuckets, (rb) => {
      if (rb) {
        // Have to modify index due to Chevron Risk Matrix being reverse in numberical order with 6 being lowest and 1 being highest
        const consequenceIdx: number = Math.abs(parseInt(rb.severity) - 6);
        const likelihoodIdx: number = Math.abs(parseInt(rb.likelihood) - 1);
        mappedMatrix[likelihoodIdx + ',' + consequenceIdx] = {
          ...rb,
          colorClass: colorsMap[likelihoodIdx][consequenceIdx],
        };
      }
    });
  }

  return mappedMatrix;
};
