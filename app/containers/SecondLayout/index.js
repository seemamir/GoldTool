import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Layout } from 'antd';
import Contentwrapper from 'components/Contentwrapper/Loadable';
import Layout2 from 'components/Layout2/loadable';
import makeSelectSecondLayout from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
const { Content } = Layout;

/* eslint-disable react/prefer-stateless-function */
export class SecondLayout extends React.Component {
  render() {
    return (
      <div style={{ width: '100%' }}>
        <Helmet>
          <title>SecondLayout</title>
          <meta name="description" content="Description of SecondLayout" />
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
            <Layout2 />
          </Content>
        </Layout>
      </div>
    );
  }
}

SecondLayout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  secondlayout: makeSelectSecondLayout(),
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

const withReducer = injectReducer({ key: 'secondLayout', reducer });
const withSaga = injectSaga({ key: 'secondLayout', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SecondLayout);
