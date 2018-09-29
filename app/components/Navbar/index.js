/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Layout, Menu, Dropdown, Button, Icon } from 'antd';
// import MenuButton from '../MenuButton/index';
import BtnFrom from '../MenuButton/Loadable';

const { Header } = Layout;

/* eslint-disable react/prefer-stateless-function */
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  showModal = () => {
    this.setState(
      {
        visible: true,
      },
      () => console.log(this.state),
    );
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  // handleButtonClick = e => {
  //   message.info('Click on left button.');
  //   console.log('click left button', e);
  // };

  // handleMenuClick = e => {
  //   message.info('Click on menu item.');
  //   console.log('click', e);
  // };

  render() {
    const menu = (
      <Menu>
        <Menu.Item key="1">
          <Button style={{ marginLeft: 8 }} onClick={this.showModal}>
            click me
          </Button>
        </Menu.Item>
        <Menu.Item key="2">
          <Button style={{ marginLeft: 8 }}>Button</Button>
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
        <BtnFrom
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        />
      </Layout>
    );
  }
}

Header.propTypes = {};

export default Navbar;
