import _ from 'lodash';

export const mapMatrix = (riskBuckets: any, colorsMap: string[][]) => {
  if (!riskBuckets) return;

  let mappedMatrix: { [key: string]: string } = {};

  if (riskBuckets && riskBuckets.length) {
    _.each(riskBuckets, (rb) => {
      if (rb) {
        // Have to modify index due to Chevron Risk Matrix being reverse in numberical order with 6 being lowest and 1 being highest
        let consequenceIdx: number = Math.abs(rb.consequenceIdx - 6);
        let likelihoodIdx: number = Math.abs(rb.likelihood - 1);
        mappedMatrix[likelihoodIdx + ',' + consequenceIdx] = {
          ...rb,
          colorClass: colorsMap[likelihoodIdx][consequenceIdx],
        };
      }
    });
  }

  return mappedMatrix;
};
