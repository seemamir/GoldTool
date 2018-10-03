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
      data: [100, 10, 5, 2, 20, 30, 45],
    },
  ],
};
const Layout2 = () => (
  <div>
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
    <div className="Output">
      <h3>Output:</h3>
    </div>
    <div>
      <Bar
        data={data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
    <div>
      <Button className="Btn" type="primary">
        Export to PDF
      </Button>
      <Button className="Btn" type="primary">
        Export to PDF
      </Button>
    </div>
  </div>
);

Layout2.propTypes = {};
const Wrapper = Form.create()(Layout2);
export default Wrapper;
