/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Layout, Menu, Input, Icon } from 'antd';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHeader from './selectors';
import reducer from './reducer';
import saga from './saga';
import Logo from '../../images/footer.png';
import { inflationValue } from './actions';

const { Header } = Layout;

/* eslint-disable react/prefer-stateless-function */
export class Navbar extends React.Component {
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
    this.setState(
      {
        inflation: e.target.value,
      },
      () => {
        this.props.inflationValue(this.state.inflation);
      },
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
          <Menu
            className="input_menu"
            theme="dark"
            style={{ visibility: !this.state.visible ? 'hidden' : 'visible' }}
          >
            <Menu.Item key="1">
              <Input
                placeholder="Inflation"
                name="inflation"
                type="number"
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

Navbar.propTypes = {};

const mapStateToProps = createStructuredSelector({
  header: makeSelectHeader(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    inflationValue: payload => dispatch(inflationValue(payload)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'header', reducer });
const withSaga = injectSaga({ key: 'header', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Navbar);
