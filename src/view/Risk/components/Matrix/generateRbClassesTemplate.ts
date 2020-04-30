import _ from 'lodash';
import matrixConfig from './matrixConfig';

//Generate a blank RiskMatrix template
export const generateRbClassesTemplate = () => {
  let newRbClasses: { [key: string]: string } = {};
  _.each(matrixConfig.matrix6x6.matMapColors, (row, ridx) => {
    _.each(row, (col, cidx) => (newRbClasses[ridx + ',' + cidx] = ''));
  });
  return newRbClasses;
};
