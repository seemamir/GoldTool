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
import Layout3 from '../../components/InputContent/Loadable';
import makeSelectThirdLayout from './selectors';
import reducer from './reducer';
import saga from './saga';
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
            <Layout3 />
          </Content>
        </Layout>
      </div>
    );
  }
}

ThirdLayout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  thirdlayout: makeSelectThirdLayout(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
