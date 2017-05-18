// import this to check each of the component's PropTypes against
import PropTypes from 'prop-types';

// helper method to determine whether a propType method is a particular PropType validator
const isCorrectPropType = (method, propType) =>
  method === PropTypes[propType] || method === PropTypes[propType].isRequired;

// helper method to determine whether a prop is required or not - if it is required,
// it'll be equal to the .isRequired method on the propType.
const isPropTypeRequired = (method, propType) => method === PropTypes[propType].isRequired;

// method to determine what PropType a particular prop is. It does this by taking
// the PropType validator of a particular prop, and running it against each of the
// PropType validators set in the propTypes array. If a match is found, we return
// an object of the prop type, and whether it is required or not.
const getPropInfo = method => {
  // For our example, we've only included these three prop types in the array,
  // as that is what the Badge takes. But as a component library grows, this
  // would need to be updated whenver you add a new component.
  const propTypes = [
    'string',
    'node',
    'bool'
  ];

  return propTypes.reduce((obj, curr) => {
    const isCorrect = isCorrectPropType(method, curr);
    if (obj.type) {
      return obj;
    }
    if (isCorrect) {
      obj.type = curr;
      obj.required = isPropTypeRequired(method, curr);
    }
    return obj;
  }, {});
};

// this takes all the propTypes (in our example - the value of Badge.propTypes)
// and loops through each, and returns a human-readable object containing
// type and required status for each prop.
const propTypesToObject = ({ propTypes }) => {
  let newProps = Object.keys(propTypes).reduce((obj, curr) => {
    const info = getPropInfo(propTypes[curr]);
    return {
      ...obj,
      [curr]: {
        type: info.type,
        required: info.required
      }
    };
  }, {});
  return newProps;
};

export default propTypesToObject;
