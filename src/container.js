'use strict';

/***********************************************************************************************************************************************
 * @CONTINUUM/REACT-BULMA - CONTAINER
 ***********************************************************************************************************************************************
 * @description
 */
import React from 'react';
import Types from 'prop-types';

/**
 * Container Wrapper
 */
export default class Container extends React.Component {
  render() {
    return (
      <div className={`container ${this.props.classes || ''}`}>
        {this.props.children}
      </div>
    );
  }
};

/**
 * Container Prop Schema
 * @type {Object}
 */
Container.propTypes = {
  classes: Types.string
};
