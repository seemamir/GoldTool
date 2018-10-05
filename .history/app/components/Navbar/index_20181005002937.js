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
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item>
              <Button type="primary" style={{ marginBottom: 16 }}>
                <Icon
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggleCollapsed}
                />
              </Button>
            </Menu.Item>
            <Menu.Item key="logo">
              <img src={Logo} alt="" />
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    );
  }
}

Header.propTypes = {};

export default Navbar;
