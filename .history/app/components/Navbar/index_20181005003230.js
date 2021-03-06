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

  showModal = () => {
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
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggleCollapsed}
          />
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
          </Menu>
          {/* <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item>
            </Menu.Item>
            <Menu.Item key="logo" />
          </Menu> */}
          <img src={Logo} alt="" />
        </Header>
      </Layout>
    );
  }
}

Header.propTypes = {};

export default Navbar;
