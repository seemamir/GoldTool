import React from 'react';
import moment from 'moment';
import { Bar, Line } from 'react-chartjs-2';
import { Input, Checkbox, DatePicker, Form, Row, Col, Button } from 'antd';
const FormItem = Form.Item;

const data = {
  labels: ['past', 'present', 'future'],
  datasets: [
    {
      label: 'Gold price',
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

class Layout1 extends React.Component {
  constructor() {
    super();
    this.state = {
      timeInYears: 1,
      output: '',
    };
  }

  handleEuro = (rule, value, callback) => {
    if (value < 1000) {
      callback('Amount too low');
    }
  };

  getValue = e => {
    console.log(e.target.value);
    const { form } = this.props;
    const euro = form.getFieldValue('euro');
    const output = euro * this.state.timeInYears + parseInt(e.target.value);
    this.setState({
      output,
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div id="test">
        <Form onSubmit={handleSubmit} hideRequiredMark={false}>
          <Row>
            <Col span={6}>
              <FormItem label="Amount in Euro">
                {getFieldDecorator('euro', {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter Euro amount',
                    },
                    {
                      validator: this.handleEuro,
                    },
                  ],
                })(
                  <Input
                    className="example-input"
                    placeholder="Amount in Euro"
                  />,
                )}
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="Time in year">
                <Input
                  className="example-input"
                  value={this.state.timeInYears}
                  name="time"
                  readOnly
                />
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
          <Row className="m-v-30">
            <Col span={2}>
              <h3>Text Here</h3>
            </Col>
            <Col span={14}>
              <Button
                className="m-l-10"
                type="primary"
                value={0}
                onClick={this.getValue}
              >
                0
              </Button>
              <Button
                className="m-l-10"
                type="primary"
                value={25}
                onClick={this.getValue}
              >
                25
              </Button>
              <Button
                className="m-l-10"
                type="primary"
                value={50}
                onClick={this.getValue}
              >
                50
              </Button>
              <Button
                className="m-l-10"
                type="primary"
                value={75}
                onClick={this.getValue}
              >
                75
              </Button>
            </Col>
          </Row>
        </Form>

        <Row className="m-v-30">
          <Col span={2}>
            <h3>
              <b>Output:</b>
            </h3>
          </Col>
          <Col span={14}>
            <Input readOnly defaultValue={this.state.output} />
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
  }
}

Layout1.propTypes = {};
const WrappedDemo = Form.create()(Layout1);
export default WrappedDemo;
