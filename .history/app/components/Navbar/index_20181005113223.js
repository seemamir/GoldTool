/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Layout, Menu, Input, Button, Icon } from 'antd';
// import MenuItem from 'antd/lib/menu/MenuItem';
import Logo from '../../images/footer.png';

const { Header } = Layout;

/* eslint-disable react/prefer-stateless-function */
const menu = (
  <div>
    <Input placeholder="Input Area" />
  </div>
);
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  toggleCollapsed = () => {
    this.setState(
      {
        visible: !this.state.visible,
      },
      () => console.log(this.state),
    );
  };

  render() {
    return (
      <Layout>
        <Header>
          <Icon
            type={this.state.visible ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggleCollapsed}
            style={{ marginRight: '30px', color: 'white', fontSize: '22px' }}
          />
          <Menu mode="inline" className="input_menu" theme="dark" inlineCollapsed={this.state.visible}>
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
          </Menu>

          <img src={Logo} alt="Logo" />
        </Header>
      </Layout>
    );
  }
}

Header.propTypes = {};

export default Navbar;
