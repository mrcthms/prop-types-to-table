import React from 'react';
import './Table.css';

const getRows = propTypes => Object.keys(propTypes).map(prop => (
  <tr key={prop}>
    <td>{prop}</td>
    <td>{propTypes[prop].type}</td>
    <td>{propTypes[prop].required.toString()}</td>
    <td>{propTypes[prop].description}</td>
  </tr>
));

const Table = ({ propTypes }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Required?</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {getRows(propTypes)}
    </tbody>
  </table>
);

export default Table;
