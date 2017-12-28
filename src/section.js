'use strict';

/***********************************************************************************************************************************************
 * @CONTINUUM/REACT-BULMA - SECTION
 ***********************************************************************************************************************************************
 * @description
 */
import React from 'react';
import Types from 'prop-types';

/**
 * Container Wrapper
 */
export default class Section extends React.Component {
  render() {
    return (
      <div className={`section ${this.props.classes}`}>
        {this.props.children}
      </div>
    )
  }
};

/**
 * Section Prop Schema
 * @type {Object}
 */
Section.propTypes = {
  classes: Types.string
};
