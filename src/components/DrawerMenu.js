import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Menu from 'material-ui/Menu';

import ArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import ArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';

import { Link } from 'react-router';
import { grey300 } from 'material-ui/styles/colors';

class DrawerMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      labs: false
    };
  }

  handleToggle() { this.setState({ open: !this.state.open }); }

  handleClose() { this.setState({ open: false }); }

  openLabsMenu() { this.setState({ labs: !this.state.labs }); }

  render() {
    return (
      <div>
        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
          <Menu>
            <MenuItem style={{ width: 300 }} containerElement={<Link to="/" />} primaryText="Главная" onTouchTap={() => this.handleClose()} />
            <MenuItem style={{ width: 300 }} containerElement={<Link to="/about" />} primaryText="Обо мне" onTouchTap={() => this.handleClose()} />
            <MenuItem
              primaryText="Практические"
              style={{
                width: 300,
                backgroundColor: this.state.labs ? grey300 : 'white'
              }}
              onTouchTap={() => this.openLabsMenu()}
              rightIcon={this.state.labs ? <ArrowUp /> : <ArrowDown />}
            />
            {
                !this.state.labs
              ?
                null
              :
                [<MenuItem containerElement={<Link to="/lab/1" />} onTouchTap={() => this.handleClose()}>Практические работы №1</MenuItem>,
                <MenuItem containerElement={<Link to="/lab/2" />} onTouchTap={() => this.handleClose()}>Практические работы №2</MenuItem>,
                <MenuItem containerElement={<Link to="/lab/3" />} onTouchTap={() => this.handleClose()}>Практические работы №3</MenuItem>]
            }
          </Menu>
        </Drawer>
      </div>
    );
  }
}

export default DrawerMenu;
