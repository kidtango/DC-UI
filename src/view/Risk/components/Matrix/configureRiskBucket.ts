import _ from 'lodash';

// export interface RiskProfile {
//   compoundRisk: number;
//   riskBuckets: {
//     id: string;
//     severity: string;
//     likelihood: string;
//     numberOfRisks: number;
//     numberOfLowConfidenceRisks: number;
//     averageConfidenceLevel: number;
//     filteredNumberOfRisks: number;
//     filteredNumberOfLowConfidenceRisks: number;
//     risks: {}[];
//   }[];
// }

const ConfigureRiskBuckets = (riskProfile: any) => {
  let matrix6x6: { [key: number]: string } = new Array(6);

  if (!riskProfile) return;

  const { riskBuckets } = riskProfile;

  _.each(riskBuckets, (rb, idx: number) => {
    let hiddenRisks = 0,
      hiddenLowConfidenceRisks = 0,
      substractedConfidenceLevel = 0,
      totalConfidenceLevel = 0,
      totalCompoundRisk = 0;

    rb.risks = _.map(rb.risks, (r) => {
      totalConfidenceLevel += r.confidenceLevel;
      totalCompoundRisk += r.score;
      return r;
    });

    rb.filteredNumberOfRisks = rb.filteredNumberOfRisks - hiddenRisks;
    rb.filteredNumberOfLowConfidenceRisks =
      rb.numberOfLowConfidenceRisks - hiddenLowConfidenceRisks;
    let confidenceLevelDiff =
      (totalConfidenceLevel - substractedConfidenceLevel) * 100;
    if (confidenceLevelDiff > 0) {
      rb.filteredAverageConfidenceLevel =
        Math.floor(confidenceLevelDiff / rb.filteredNumberOfRisks) + '%';
    } else {
      rb.filteredAverageConfidenceLevel = '0%';
    }
    rb.filteredScore = (totalCompoundRisk * 100) / rb.risks.length;
    matrix6x6[idx] = rb;
  });
  return matrix6x6;
};

export default ConfigureRiskBuckets;
