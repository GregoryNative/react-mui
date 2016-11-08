import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';

import Drawer from '../components/DrawerMenu';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import '../assets/stylesheets/base.scss';
import logo from '../assets/images/logo.svg';

const App = React.createClass({
  displayName: 'App',

  render() {
    return (
      <div>
        <Drawer ref={ref => this.drawer = ref} />
        <AppBar
          zDepth={1}
          style={{ height: 70 }}
          onLeftIconButtonTouchTap={() => this.drawer.handleToggle()}
          // onLeftIconButtonTouchTap={() => console.log('pressed')}
          title="Информатика"
          onTitleTouchTap={() => browserHistory.push('/') }
          // add githubLink with icon
          iconElementRight={<img src={logo} className="App-logo" alt="logo" />}
        />
        {this.props.children}
      </div>
    );
  },

  propTypes: {
    children: PropTypes.object
  }
});

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
