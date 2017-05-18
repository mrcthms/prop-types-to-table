const propTypesToDescriptions = ({ propTypes, data }) => Object.keys(propTypes).reduce((obj, curr) => ({
  ...obj,
  [curr]: {
    description: data[curr]
  }
}), {});

export default propTypesToDescriptions;
