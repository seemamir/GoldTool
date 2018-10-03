import React from 'react';
import moment from 'moment';
import { Bar, Line } from 'react-chartjs-2';
import { Input, Checkbox, DatePicker, Form, Row, Col, Button } from 'antd';
const FormItem = Form.Item;
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [100, 10, 5, 2, 20, 30, 45],
    },
  ],
};
const handleSubmit = e => {
  e.preventDefault();
  this.props.form.validateFieldsAndScroll((err, values) => {
    if (!err) {
      console.log('Received values of form: ', values);
    }
  });
};

const Layout3 = () => (
  <div id="test">
    <Form onSubmit={handleSubmit} hideRequiredMark="false">
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
        <Col span={10}>
          <Bar
            data={data}
            height={400}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </Col>
        <Col span={10}>
          <Line
            data={data}
            height={400}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </Col>
      </Row>

      <Row className="m-v-30">
        <Button type="primary">Export to PDF</Button>
        <Button className="m-l-10" type="primary">
          Export to PDF
        </Button>
      </Row>
    </Form>
  </div>
);

Layout3.propTypes = {};

export default Layout3;
