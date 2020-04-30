import _ from 'lodash';

// Adapted to work with IRIS MVP3.1
const getRiskProfileAdapter = (responseData: any) => {
  if (!responseData) return;

  let adaptedRespondData = _.cloneDeep(responseData);
  const { riskBuckets } = adaptedRespondData;
  // responseData.getRiskProfile
  //   ? (riskBuckets = adaptedRespondData.getRiskProfile.riskBuckets)
  //   : (riskBuckets = adaptedRespondData.classifyNewRisks.riskBuckets);
  if (riskBuckets) {
    _.each(riskBuckets, (riskBucket, idx) => {
      riskBucket.risks = _.map(riskBucket.risks, (risk) => {
        return _.assign(risk.pppRisk, risk.severityLikelihoodRisk, risk.risk);
      });

      adaptedRespondData.riskBuckets[idx] = riskBucket;
    });
  }

  return adaptedRespondData;
};

export default getRiskProfileAdapter;
