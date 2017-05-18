import React from 'react';
import deepAssign from 'deep-assign';
import Badge from './components/Badge';
import data from './data';
import Table from './ui/Table';
import './App.css';
import propTypesToObject from './helpers/propTypesToObject';
import propTypesToDescriptions from './helpers/propTypesToDescriptions';

const propTypes = propTypesToObject({
  propTypes: Badge.propTypes
});

const propTypeDescriptions = propTypesToDescriptions({
  propTypes: Badge.propTypes,
  data: data.propTypes.Badge
});

const App = props => (
  <div className="app">
    <Badge
      withHeading
      heading="Hello Darkness">
      My Old Friend
    </Badge>
    <Table
      propTypes={deepAssign({}, propTypes, propTypeDescriptions)}
    />
  </div>
);

export default App;
