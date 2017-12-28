'use strict';

/***********************************************************************************************************************************************
 * @CONTINUUM/REACT-BULMA - CONTAINER
 ***********************************************************************************************************************************************
 * @description
 */
import React from 'react';
import Types from 'prop-types';
import Column from './column';

/**
 * Columns Wrapper
 */
export default class Columns extends React.Component {
  render() {
    let style = this.props.style || {};

    return (
      <div className={`columns  ${this.props.classes || ''}`} style={style}>
        {this.props.children}
      </div>
    )
  }
};

/**
 * Columns Prop Schema
 * @type {Object}
 */
Columns.propTypes = {
  style: Types.object,
  classes: Types.string
};
