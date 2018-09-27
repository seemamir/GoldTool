/**
 *
 * Content
 *
 */

import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
const Contentwrapper = () => (
  <Layout style={{ padding: '24px 24px 24px' }}>
    <Content
      style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}
    >
      Content
    </Content>
  </Layout>
);

Contentwrapper.propTypes = {};

export default Contentwrapper;
