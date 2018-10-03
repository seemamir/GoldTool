import React from 'react';
import moment from 'moment';
import { Bar } from 'react-chartjs-2';
import { Input, Checkbox, DatePicker, Form, Row, Col, Button } from 'antd';
const FormItem = Form.Item;
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [10, 30, 50, 100, 20, 30, 45],
    },
  ],
};
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
        <h3>
          <b>Output:</b>
        </h3>
      </Col>
      <Col span={14}>
        <Input readOnly defaultValue="344" />
      </Col>
    </Row>
    <Row>
      <Col span={8}>
        <Bar
          data={data}
          width="100%"
          height={400}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </Col>
      <Col span={8}>
        <Bar
          data={data}
          width="100%"
          height={400}
          options={{
            maintainAspectRatio: false,
          }}
        />
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
