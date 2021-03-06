import React from 'react';

import { Layout, Menu, Input, Button, Icon } from 'antd';
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
          <Menu>
            <Menu.Item key="0">
              <a href="http://www.alipay.com/">1st menu item</a>
            </Menu.Item>
            <Menu.Item key="1">
              <a href="http://www.taobao.com/">2nd menu item</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">3rd menu item</Menu.Item>
          </Menu>
          {/* <Menu
            className="input_menu"
            theme="dark"
            inlineCollapsed={this.state.visible}
            style={{ visibility: !this.state.visible ? 'hidden' : 'visible' }}
          >
            <Menu.Item key="1">
              <Input placeholder="Infaltion" />
            </Menu.Item>
          </Menu> */}

          <img src={Logo} alt="Logo" />
        </Header>
      </Layout>
    );
  }
}

Header.propTypes = {};

export default Navbar;
