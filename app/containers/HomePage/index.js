import React from 'react';
import { Layout } from 'antd';
import Navbar from '../../components/Navbar/Loadable';
import Sidebar from '../../components/Sidebar/Loadable';
// import Contentwrapper from '../../components/Contentwrapper/Loadable';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Layout>
        <Navbar />
        <Sidebar />
        {/* <Contentwrapper /> */}
      </Layout>
    );
  }
}
