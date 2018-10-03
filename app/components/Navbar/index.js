/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Layout, Menu, Input, Icon } from 'antd';
// import MenuItem from 'antd/lib/menu/MenuItem';
import Logo from '../../images/footer.png';
import MenuItem from 'antd/lib/menu/MenuItem';

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
            <MenuItem>
              <Icon className="Icon" type="align-left" theme="outlined" />
            </MenuItem>
            {/* <Input placeholder="Input Area" /> */}

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
