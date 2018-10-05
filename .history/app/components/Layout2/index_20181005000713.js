import React from 'react';
import moment from 'moment';
import { Bar, Line } from 'react-chartjs-2';
import { Input, Checkbox, DatePicker, Form, Row, Col, Button } from 'antd';
import Msg from './modal';
import PdfModal from './pdfModal';
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

class Layout2 extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      open: false,
      output: '',
      startDate: moment(),
      endDate: moment(),
    };
  }
  handleEuro = (rule, value, callback) => {
    if (value < 1000) {
      callback('Amount too low');
    }
  };
  handleTime = (rule, value, callback) => {
    if (value < 4) {
      callback('Time should be bigger than 4');
    }
  };
  handleOpen = e => {
    if (e.target.checked === true) {
      this.setState({
        visible: true,
      });
    }
  };
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
  getOutput = e => {
    const { form } = this.props;
    const euro = form.getFieldValue('euro');
    const time = form.getFieldValue('time');
    console.log(euro !== undefined && euro >= 1000);
    if (euro !== undefined && euro >= 1000 && time !== undefined && time >= 4) {
      const output = euro * time;
      this.setState({
        output,
      });
    }
  };

  handlePopup = () => {
    this.setState({
      open: true,
    });
  };
  handleDisagree = () => {
    this.setState({
      open: false,
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
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
                    onChange={this.getOutput}
                  />,
                )}
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="Time in year">
                {getFieldDecorator('time', {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter time in years',
                    },
                    {
                      validator: this.handleTime,
                    },
                  ],
                })(
                  <Input className="example-input" onChange={this.getOutput} />,
                )}
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="Start date">
                <DatePicker
                  value={this.state.startDate}
                  className="DataPicker"
                  onChange={this.handleStartDate}
                />
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="End date">
                <DatePicker
                  value={this.state.endDate}
                  className="DataPicker"
                  onChange={this.handleEndDate}
                />
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem>
                <Checkbox className="Check" onChange={this.handleOpen}>
                  Checkbox
                </Checkbox>
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
            <Button type="primary" onClick={this.handlePopup}>
              Export to PDF
            </Button>
            <Button
              className="m-l-10"
              type="primary"
              onClick={this.handlePopup}
            >
              Export to PDF
            </Button>
          </Row>
          <Msg visible={this.state.visible} cancel={this.handleCancel} />
          <PdfModal
            visible={this.state.open}
            agree={this.handleAgree}
            disagree={this.handleDisagree}
          />
        </Form>
      </div>
    );
  }
}

Layout2.propTypes = {};
const Wrapper = Form.create()(Layout2);
export default Wrapper;
