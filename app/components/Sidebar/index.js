/**
 *
 * SideBar
 *
 */

import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import Contentwrapper from 'components/Contentwrapper/Loadable';
// import { Tabs, DatePicker } from 'antd';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';
const { Sider } = Layout;

/* eslint-disable react/prefer-stateless-function */
class Sidebar extends React.Component {
  render() {
    return (
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="1">
              <span>
                <Icon type="bar-chart" theme="outlined" />Max Mustermman
              </span>
            </Menu.Item>
            <Menu.Item key="2">
              <span>
                <Icon type="bar-chart" theme="outlined" />Goldenalage Kurreit
              </span>
            </Menu.Item>
            <Menu.Item key="3">
              <span>
                <Icon type="bar-chart" theme="outlined" />BGK+(mit 99 option)
              </span>
            </Menu.Item>
            <Menu.Item key="4">
              <span>
                <Icon type="bar-chart" theme="outlined" />Direkt Goldauf
              </span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Contentwrapper />
      </Layout>
    );
  }
}

Sidebar.propTypes = {};

export default Sidebar;
