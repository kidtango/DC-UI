import _ from 'lodash';

const configureRiskBuckets = (riskProfile: any) => {
  let matrix6x6 = new Array(6);

  if (!riskProfile) {
    return;
  }

  const { riskBuckets } = riskProfile;

  _.each(riskBuckets, (rb, idx: number) => {
    let hiddenRisks = 0,
      hiddenLowConfidenceRisks = 0,
      substractedConfidenceLevel = 0,
      totalConfidenceLevel = 0,
      totalCompoundRisk = 0;

    // Check to see which disciplines are selected
    // rb.risks = _.map(rb.risks, r => {
    //   totalConfidenceLevel += r.confidenceLevel;
    //   if (
    //     !data.riskProfilesList.riskProfile.riskDisciplines[r.discipline.name]
    //       .selected
    //   ) {
    //     r.hide = true;
    //     substractedConfidenceLevel += r.confidenceLevel;
    //     if (r.lowConfidence) {
    //       hiddenLowConfidenceRisks++;
    //     }
    //     hiddenRisks++;
    //   } else {
    //     r.hide = false;
    //     totalCompoundRisk += r.score;
    //   }
    //   return r;
    // });

    rb.risks = _.map(rb.risks, (r) => {
      totalConfidenceLevel += r.confidenceLevel;
      totalCompoundRisk += r.score;
      return r;
    });

    rb.filteredNumberOfRisks = rb.numberOfRisks - hiddenRisks;
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

export default configureRiskBuckets;
