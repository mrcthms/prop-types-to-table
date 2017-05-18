import React from 'react';
import deepAssign from 'deep-assign';
// import manifest from './manifest';
import Badge from './Badge';
import data from './data';
import Table from './Table';
import './App.css';
import propTypesToObject from './propTypesToObject';
import propTypesToDescriptions from './propTypesToDescriptions';
// const Component = manifest.Badge.component;

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
      component="Badge"
      propTypes={deepAssign({}, propTypes, propTypeDescriptions)}
    />
  </div>
);

export default App;
