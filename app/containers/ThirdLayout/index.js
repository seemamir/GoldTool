/**
 *
 * ThirdLayout
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
import Layout3 from '../../components/Layout3/Loadable';
import makeSelectThirdLayout from './selectors';
import reducer from './reducer';
import saga from './saga';
import makeSelectHeader from '../Header/selectors';
import { inflationValue } from '../Header/actions';

const { Content } = Layout;

/* eslint-disable react/prefer-stateless-function */
export class ThirdLayout extends React.Component {
  render() {
    return (
      <div style={{ width: '100%' }}>
        <Helmet>
          <title>ThirdLayout</title>
          <meta name="description" content="Description of ThirdLayout" />
        </Helmet>
        <Layout
          style={{ padding: '24px 24px 24px', height: '100%', width: '100%' }}
        >
          <Content
            style={{
              background: '#fff',
              padding: 24,
              width: '100%',
              margin: 0,
              minHeight: 280,
            }}
          >
            <Layout3
              inflationValue={this.props.inflationValue}
              resetInflation={this.props.resetInflation}
            />
          </Content>
        </Layout>
      </div>
    );
  }
}

ThirdLayout.propTypes = {};

const mapStateToProps = createStructuredSelector({
  thirdlayout: makeSelectThirdLayout(),
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

const withReducer = injectReducer({ key: 'thirdLayout', reducer });
const withSaga = injectSaga({ key: 'thirdLayout', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ThirdLayout);
