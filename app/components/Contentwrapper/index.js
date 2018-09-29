/**
 *
 * Content
 *
 */
import React from 'react';
import { Layout } from 'antd';
import InputContent from 'components/InputContent/Loadable';
import Layout1 from 'components/Layout1/Loadable';
import Layout2 from 'components/Layout2/Loadable';

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
    >
      <InputContent />
      <Layout1 />
      <Layout2 />
    </Content>
  </Layout>
);

Contentwrapper.propTypes = {};

export default Contentwrapper;
