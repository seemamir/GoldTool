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
    this.state = {
      visible: false,
      inflation: '',
    };
  }

  toggleCollapsed = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  handleChange = e => {
    this.setState({
      inflation: e.target.value,
    });
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
          <Menu
            className="input_menu"
            theme="dark"
            style={{ visibility: !this.state.visible ? 'hidden' : 'visible' }}
          >
            <Menu.Item key="1">
              <Input
                placeholder="Inflation"
                name="inflation"
                value={this.state.inflation}
                onChange={this.handleChange}
              />
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
