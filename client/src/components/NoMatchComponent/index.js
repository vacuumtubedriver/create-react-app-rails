import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SecondComponent extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        404
      </div>
    );
  }
}

export default SecondComponent;
