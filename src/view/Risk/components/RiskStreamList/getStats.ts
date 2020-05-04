import _ from 'lodash';

interface RiskBucket {
  colorClass: {
    level6: number;
    level7: number;
    level8: number;
    level9: number;
    level10: number;
    lowConfidence: number;
  };
  filteredNumberOfLowConfidenceRisks: number;
  numberOfRisks: number;
}

// export const colorClassIdx: { [key: string]: number };

//Classified all buckets into seperate color type and sum up all lowConfidence risks
export const getStats = (riskBuckets: RiskBucket[]) => {
  if (!riskBuckets) {
    return;
  }

  const types: { [key: string]: number } = {
    level6: 0,
    level7: 0,
    level8: 0,
    level9: 0,
    level10: 0,
    lowConfidence: 0,
  };

  _.each(riskBuckets, (rb: any) => {
    if (rb.filteredNumberOfLowConfidenceRisks)
      types['lowConfidence'] += rb.filteredNumberOfLowConfidenceRisks;
    types[rb.colorClass] += rb.numberOfRisks;
  });
  return types;
};
