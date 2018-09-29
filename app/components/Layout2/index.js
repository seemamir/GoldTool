import React from 'react';
import { Input, DatePicker, Form, Row, Col, Checkbox } from 'antd';
import moment from 'moment';
const FormItem = Form.Item;

const Layout2 = () => (
  <div className="gutter-example">
    <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <FormItem label="Amount in Euro">
          <Input
            className="example-input"
            placeholder="Amount in Euro"
            // className="input-item"
          />
        </FormItem>
      </Col>
      <Col className="gutter-row" span={6}>
        <FormItem label="Time in year">
          <Input placeholder="time in year" className="example-input" />
        </FormItem>
      </Col>
      <Col className="gutter-row" span={6}>
        <FormItem label="Start date">
          <DatePicker
            defaultValue={moment('2015/01/01')}
            className="DataPicker"
          />
        </FormItem>
      </Col>
      <Col className="gutter-row" span={6}>
        <FormItem label="End">
          <DatePicker
            defaultValue={moment('2015/01/01')}
            className="DataPicker"
          />
        </FormItem>
      </Col>
    </Row>
    <Checkbox>Checkbox</Checkbox>
  </div>
);

Layout2.propTypes = {};

export default Layout2;
