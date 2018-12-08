/**
 *
 * SideBar
 *
 */

import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../images/footer.png';
const { Sider } = Layout;

/* eslint-disable react/prefer-stateless-function */
class Sidebar extends React.Component {
  render() {
    return (
      <Sider width={250} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100vh', borderRight: 0 }}
        >
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="bar-chart" theme="outlined" />Max Mustermman
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/layout2">
              <Icon type="bar-chart" theme="outlined" />Goldenalage Kurreit
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/layout3">
              <Icon type="bar-chart" theme="outlined" />BGK+(mit 99 option)
            </Link>
          </Menu.Item>
        </Menu>
        <img
          src={Logo}
          alt="logo"
          style={{ position: 'absolute', bottom: '15%', left: '25%' }}
        />
      </Sider>
    );
  }
}

Sidebar.propTypes = {};

export default Sidebar;
