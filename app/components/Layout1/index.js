import React from 'react';
import moment from 'moment';
import { Input, DatePicker, Form, Row, Col, Button } from 'antd';
const FormItem = Form.Item;

const Layout1 = () => (
  <div>
    <Row>
      <Col span={12}>
        <FormItem label="Amount in Euro">
          <Button className="btn" type="primary">
            1
          </Button>
          <Input className="example-input" placeholder="Amount in Euro" />
        </FormItem>
      </Col>
      <Col span={12}>
        <FormItem label="Time in year">
          <Button className="btn" type="primary">
            2
          </Button>
          <Input placeholder="time in year" className="example-input" />
        </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span={12}>
        <FormItem label="Start date">
          <Button className="btn" type="primary">
            3
          </Button>
          <DatePicker
            defaultValue={moment('2015/01/01')}
            className="DataPicker"
          />
        </FormItem>
      </Col>
      <Col span={12}>
        <FormItem label="End date">
          <Button className="btn" type="primary">
            4
          </Button>
          <DatePicker
            defaultValue={moment('2015/01/01')}
            className="DataPicker"
          />
        </FormItem>
      </Col>
    </Row>
  </div>
);

Layout1.propTypes = {};

export default Layout1;
