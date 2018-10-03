import React from 'react';
import moment from 'moment';
import { Input, Checkbox, DatePicker, Form, Row, Col, Button } from 'antd';
const FormItem = Form.Item;

const Layout3 = () => (
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
          <Checkbox className="Check">Checkbox</Checkbox>
        </FormItem>
      </Col>
    </Row>

    <div>
      <Button>Text Here</Button>
      <Button className="Btn" type="primary">
        1
      </Button>
      <Button className="Btn" type="primary">
        2
      </Button>
      <Button className="Btn" type="primary">
        3
      </Button>
      <Button className="Btn" type="primary">
        4
      </Button>
    </div>
    <div className="Output">
      <h3>Output:</h3>
    </div>

    <div>
      <Button className="Btn" type="primary">
        Export to PDF
      </Button>
      <Button className="Btn" type="primary">
        Export to PDf
      </Button>
    </div>
  </div>
);

Layout3.propTypes = {};

export default Layout3;
