import React from 'react';
import moment from 'moment';
import { Input, Checkbox, DatePicker, Form, Row, Col, Button } from 'antd';
const FormItem = Form.Item;

const Layout2 = () => (
  <div id="test">
    <Row>
      <Col span={6}>
        <FormItem label="Amount in Euro">
          <Input className="example-input" placeholder="Amount in Euro" />
        </FormItem>
      </Col>
      <Col span={6}>
        <FormItem label="Time in year">
          <Input value="1" className="example-input" />
        </FormItem>
      </Col>
      <Col span={6}>
        <FormItem label="Start date">
          <DatePicker
            defaultValue={moment('2015/01/01')}
            className="DataPicker"
          />
        </FormItem>
      </Col>
      <Col span={6}>
        <FormItem label="End date">
          <DatePicker
            defaultValue={moment('2015/01/01')}
            className="DataPicker"
          />
        </FormItem>
      </Col>
      <Col span={6}>
        <FormItem>
          <Checkbox>Checkbox</Checkbox>
        </FormItem>
      </Col>
    </Row>

    <Row className="m-v-30">
      <Col span={2}>
        <h3>Text Here</h3>
      </Col>
      <Col span={14}>
        <Button className="m-l-10" type="primary">
          0
        </Button>
        <Button className="m-l-10" type="primary">
          25
        </Button>
        <Button className="m-l-10" type="primary">
          50
        </Button>
        <Button className="m-l-10" type="primary">
          75
        </Button>
      </Col>
    </Row>

    <Row className="m-v-30">
      <Col span={2}>
        <h3>Output:</h3>
      </Col>
      <Col>
        <Input readOnly defaultValue="344" />
      </Col>
    </Row>

    <div>
      <Button type="primary">Export to PDF</Button>
      <Button className="m-l-10" type="primary">
        Export to PDF
      </Button>
    </div>
  </div>
);

Layout2.propTypes = {};

export default Layout2;
