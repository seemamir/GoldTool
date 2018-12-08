/**
 *
 * FirstLayout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Layout } from 'antd';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import Layout1 from '../../components/Layout1/Loadable';

import makeSelectFirstLayout from './selectors';
import { inflationValue } from '../Header/actions';
import makeSelectHeader from '../Header/selectors';
import reducer from './reducer';
import saga from './saga';
const { Content } = Layout;

/* eslint-disable react/prefer-stateless-function */
export class FirstLayout extends React.Component {
  render() {
    return (
      <div style={{ width: '100%' }}>
        <Helmet>
          <title>First Layout</title>
          <meta name="description" content="Description of FirstLayout" />
        </Helmet>
        <Layout style={{ padding: '24px 24px 24px', width: '100%' }}>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              width: '100%',
              margin: 0,
              minHeight: 280,
            }}
          >
            <Layout1
              inflationValue={this.props.inflationValue}
              resetInflation={this.props.resetInflation}
            />
          </Content>
        </Layout>
      </div>
    );
  }
}

FirstLayout.propTypes = {
  inflationValue: PropTypes.object,
  resetInflation: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  firstlayout: makeSelectFirstLayout(),
  inflationValue: makeSelectHeader(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    resetInflation: payload => dispatch(inflationValue(payload)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'firstLayout', reducer });
const withSaga = injectSaga({ key: 'firstLayout', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(FirstLayout);
