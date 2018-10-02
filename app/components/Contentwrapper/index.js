/**
 *
 * Content
 *
 */
import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
// import InputForm from 'components/InputForm/Loadable';
import Layout3 from '../InputContent/Loadable';
// import Layout1 from '../Layout1/Loadable';
import Layout2 from '../Layout2/Loadable';

// import Layout1 from 'components/Layout1/Loadable';
// import Layout2 from 'components/Layout2/Loadable';

const { Content } = Layout;
const Contentwrapper = () => (
  <Layout style={{ padding: '24px 24px 24px', height: '100%' }}>
    <Content
      style={{
        background: '#fff',
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    />
  </Layout>
);

Contentwrapper.propTypes = {};

export default Contentwrapper;
