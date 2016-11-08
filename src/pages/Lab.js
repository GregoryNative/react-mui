import React from 'react';
import '../assets/stylesheets/base.scss';

const Lab = React.createClass({
  render() {
    return (
      <div className="Main">
        <p className="App-intro">
          <b>Практическая работа №{this.props.params.id}</b>
        </p>
      </div>
    );
  }
});

export default Lab;
