import React from 'react';
import PDF from 'react-pdf-js';

import '../assets/stylesheets/base.scss';

const Lab = React.createClass({
  componentDidMount() {
    // PDFJS.getDocument('graphoanalyzator.pdf').then(pdf => {
    //   alert(pdf);
    //   // this.setState({ pdf })
    // });
  },

  render() {
    return (
      <div className="Main">
        <p className="App-intro">
          <b>Практическая работа №{this.props.params.id}</b>
        </p>
        <PDF file='http://imgur.com/wNiidSj' page={1} />
      </div>
    );
  }
});

export default Lab;
