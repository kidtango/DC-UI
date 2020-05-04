import _ from 'lodash';

// export interface RiskBucket {
//   averageConfidenceLevel: number;
//   filteredAverageConfidenceLevel: string;
//   filteredNumberOfLowConfidenceRisks: number;
//   filteredNumberOfRisks: number;
//   filteredScore: number;
//   id: string;
//   likelihood: string;
//   numberOfLowConfidenceRisks: number;
//   numberOfRisks: number;
//   risks: {}[];
//   severity: string;
// }

// export interface ColorsMap {
//   colorsMap: string[][];
// }

export const mapMatrix = (riskBuckets: any, colorsMap: any) => {
  if (!riskBuckets) return;

  let mappedMatrix: { [key: string]: {} } = {};

  if (riskBuckets && riskBuckets.length) {
    _.each(riskBuckets, (rb) => {
      if (rb) {
        // Have to modify index due to Chevron Risk Matrix being reverse in numberical order with 6 being lowest and 1 being highest
        let consequenceIdx: string = Math.abs(
          parseInt(rb.severity) - 6
        ).toString();
        let likelihoodIdx: any = Math.abs(
          parseInt(rb.likelihood) - 1
        ).toString();
        mappedMatrix[likelihoodIdx + ',' + consequenceIdx] = {
          ...rb,
          colorClass: colorsMap[likelihoodIdx][consequenceIdx],
        };
      }
    });
  }

  return mappedMatrix;
};
