import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Layout } from 'antd';
import Layout2 from '../../components/Layout2/Loadable';
import makeSelectSecondLayout from './selectors';
import makeSelectHeader from '../Header/selectors';

import reducer from './reducer';
import saga from './saga';
import { inflationValue } from '../Header/actions';

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
            <Layout2
              inflationValue={this.props.inflationValue}
              resetInflation={this.props.resetInflation}
            />
          </Content>
        </Layout>
      </div>
    );
  }
}

SecondLayout.propTypes = {};

const mapStateToProps = createStructuredSelector({
  secondlayout: makeSelectSecondLayout(),
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

const withReducer = injectReducer({ key: 'secondLayout', reducer });
const withSaga = injectSaga({ key: 'secondLayout', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SecondLayout);
