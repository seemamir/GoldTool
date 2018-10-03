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
      data: [10, 30, 50, 95, 20, 30, 45],
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

const handleEuro = e => {
  const value = e.target.value;
  this.setState({ confirmDirty: this.state.confirmDirty || !!value });
};

const Layout2 = props => {
  const { getFieldDecorator } = props.form;

  return (
    <div id="test">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col span={6}>
            <FormItem label="Amount in Euro">
              {getFieldDecorator('confirm', {
                rules: [
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  {
                    validator: this.compareToFirstPassword,
                  },
                ],
              })(
                <Input
                  className="example-input"
                  placeholder="Amount in Euro"
                  onBlur={handleEuro}
                />,
              )}
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="Time in year">
              <Input value="1" className="example-input" />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="Start date">
              <DatePicker defaultValue={moment()} className="DataPicker" />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="End date">
              <DatePicker defaultValue={moment()} className="DataPicker" />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem>
              <Checkbox>Back</Checkbox>
            </FormItem>
          </Col>
        </Row>
      </Form>

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
    </div>
  );
};

Layout2.propTypes = {};

export default Layout2;
