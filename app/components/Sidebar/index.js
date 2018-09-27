/**
 *
 * SideBar
 *
 */

import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import Contentwrapper from 'components/Contentwrapper/Loadable';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
const { Sider } = Layout;
const { SubMenu } = Menu;

/* eslint-disable react/prefer-stateless-function */
class Sidebar extends React.Component {
  render() {
    return (
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            // defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item
              key="1"
              title={
                <span>
                  <Icon type="bar-chart" theme="outlined" />Max Mustermann
                </span>
              }
            >
              nav 1
            </Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="bar-chart" theme="outlined" />Max Mustermann
                </span>
              }
            />
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="bar-chart" theme="outlined" />Goldanlage Kurrzeit
                </span>
              }
            />
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="bar-chart" theme="outlined" />BGK+ (mit 999
                  Option)
                </span>
              }
            />
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="bar-chart" theme="outlined" />Direkt Goldauf
                </span>
              }
            />
          </Menu>
        </Sider>
        <Contentwrapper />
      </Layout>
    );
  }
}

Sidebar.propTypes = {};

export default Sidebar;
