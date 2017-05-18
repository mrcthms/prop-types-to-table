import React from 'react';
import PropTypes from 'prop-types';
import './Badge.css';

const Badge = ({ withHeading, heading, children }) => (
  <div className="badge">
    {withHeading && (
      <span className="badge-heading">{heading}</span>
    )}
    {children}
  </div>
);

Badge.propTypes = {
  withHeading: PropTypes.bool,
  heading: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Badge;
