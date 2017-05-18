import PropTypes from 'prop-types';

const isCorrectPropType = (method, propType) =>
  method === PropTypes[propType] || method === PropTypes[propType].isRequired;

const isPropTypeRequired = (method, propType) => method === PropTypes[propType].isRequired;

const getPropInfo = method => {
  let info = {};

  const propTypes = [
    'string',
    'number',
    'array',
    'object',
    'func',
    'node',
    'any',
    'bool',
    'element'
  ];

  return propTypes.reduce((prev, curr) => {
    const isCorrect = isCorrectPropType(method, curr);
    if (prev.type) {
      return prev;
    }
    if (isCorrect) {
      prev.type = curr;
      prev.required = isPropTypeRequired(method, curr);
    }
    return prev;
  }, info);
};

const propTypesToObject = ({ propTypes, defaults, oneOfs }) => {
  let newProps = Object.keys(propTypes).reduce((prev, curr) => {
    const info = getPropInfo(propTypes[curr]);
    prev[curr] = {
      type: info.type,
      required: info.required
    };
    if (defaults && defaults[curr]) {
      prev[curr].defaultValue = defaults[curr];
    }
    if (oneOfs && oneOfs[curr]) {
      prev[curr].allowedValues = oneOfs[curr];
    }
    return prev;
  }, {});
  return newProps;
};

export default propTypesToObject;
