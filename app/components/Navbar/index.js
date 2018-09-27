/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Layout, Menu, Dropdown, Button, Icon, message } from 'antd';
const { Header } = Layout;

/* eslint-disable react/prefer-stateless-function */
class Navbar extends React.Component {
  handleButtonClick = e => {
    message.info('Click on left button.');
    console.log('click left button', e);
  };

  handleMenuClick = e => {
    message.info('Click on menu item.');
    console.log('click', e);
  };

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">
          <Button style={{ marginLeft: 8 }}>
            Button <Icon type="down" />
          </Button>
        </Menu.Item>
        <Menu.Item key="2">
          <Button style={{ marginLeft: 8 }}>
            Button <Icon type="down" />
          </Button>
        </Menu.Item>
      </Menu>
    );
    return (
      <Layout>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Dropdown overlay={menu}>
              <Icon type="bars" theme="outlined" className="icon" />
            </Dropdown>
            <Menu.Item>Goldpreis-GmbH</Menu.Item>
          </Menu>
        </Header>
      </Layout>
    );
  }
}

Header.propTypes = {};

export default Navbar;
