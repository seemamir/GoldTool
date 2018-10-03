import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import FirstLayout from 'containers/FirstLayout/Loadable';
import SecondLayout from 'containers/SecondLayout/Loadable';
import ThirdLayout from 'containers/ThirdLayout/Loadable';

import NotFoundPage from '../NotFoundPage/Loadable';
import Navbar from '../../components/Navbar/Loadable';
import Sidebar from '../../components/Sidebar/Loadable';

export default function App() {
  return (
    <div>
      <Navbar />
      <Layout style={{ width: '100%' }}>
        <Sidebar />
        <Switch>
          <Route path="/layout2" component={SecondLayout} />
          <Route path="/layout3" component={ThirdLayout} />
          <Route exact path="/" component={FirstLayout} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </div>
  );
}
