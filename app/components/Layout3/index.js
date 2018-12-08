import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import axios from 'axios';
import { Bar, Line } from 'react-chartjs-2';
import { Input, Checkbox, DatePicker, Form, Row, Col, Button } from 'antd';
import MsgLayout3 from './modal';

const FormItem = Form.Item;

const data = {
  labels: ['May 1', 'May 2', 'May 3', 'May 4', 'May 5'],
  datasets: [
    {
      label: 'Low',
      data: [67.8, 33, 55, 5.5, 77],
      backgroundColor: 'rgba(55, 160, 225, 0.7)',
    },
    {
      label: 'Moderate',
      data: [20.7, 11, 33, 4.5, 66],
      backgroundColor: 'rgba(225, 58, 55, 0.7)',
    },
  ],
};

class Layout3 extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      timeInYears: 1,
      output: '',
      startDate: moment(),
      endDate: moment(),
      data: [],
      columnNames: [],
    };
  }

  async componentDidMount() {
    this.setState(
      prevState => {
        const changeDate = moment(prevState.endDate)
          .add(prevState.timeInYears, 'years')
          .calendar();
        return {
          startDate: moment(),
          endDate: moment(changeDate),
        };
      },
      () => this.getData(),
    );
    this.getData();
    this.props.resetInflation(null);
  }

  getData = async () => {
    try {
      const startDate = this.state.startDate.format('YYYY-MM-DD');
      const endDate = this.state.endDate.format('YYYY-MM-DD');

      const response = await axios.get(
        `https://www.quandl.com/api/v3/datasets/LBMA/GOLD.json?api_key=9FyTRDjJsezjWLM7Y6bz&transform=diff&collapse=monthly&start_date=${startDate}&end_date=${endDate}`,
      );

      this.setState({
        columnNames: response.data.dataset.column_names,
        data: response.data.dataset.data,
      });
    } catch (e) {
      console.log('error', e.message);
    }
  };

  componentWillReceiveProps(nextProps) {
    const currentInflation =
      nextProps.inflationValue && nextProps.inflationValue.inflation;
    const prevInflation =
      this.props.inflationValue && this.props.inflationValue.inflation;

    if (currentInflation !== prevInflation) {
      this.getOutput(currentInflation);
    }
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

  getOutput = currentInflation => {
    const { form } = this.props;
    const inflation = currentInflation ? currentInflation : null;
    const euro = form.getFieldValue('euro');
    if (
      euro !== undefined &&
      euro >= 1000 &&
      inflation !== null &&
      inflation !== ''
    ) {
      const output = inflation * euro * this.state.timeInYears;
      this.setState(
        {
          output,
        },
        () => {
          this.getData();
        },
      );
    } else {
      this.setState({
        output: 'Inflation value is missing',
      });
    }
  };

  handleBackChange = e => {
    if (e.target.checked === true) {
      this.setState(
        prevState => {
          const changeDate = moment(prevState.startDate)
            .subtract(1, 'year')
            .calendar();

          return {
            startDate: moment(changeDate),
            endDate: moment(),
          };
        },
        () => this.getData(),
      );
    } else {
      this.setState(
        prevState => {
          const changeDate = moment(prevState.endDate)
            .add(prevState.timeInYears, 'years')
            .calendar();
          return {
            startDate: moment(),
            endDate: moment(changeDate),
          };
        },
        () => this.getData(),
      );
    }
  };

  handleEndDate = e => {
    this.setState(
      {
        endDate: moment(e),
      },
      () => this.getData(),
    );
  };
  handleStartDate = e => {
    this.setState(
      {
        startDate: moment(e),
      },
      () => this.getData(),
    );
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
    const past = moment(this.state.startDate)
      .subtract(1, 'year')
      .calendar();
    const present = moment(this.state.startDate).format('DD/MM/YYYY');
    const future = moment(this.state.startDate)
      .add(1, 'year')
      .calendar();
    const euroPM = this.state.columnNames.findIndex(c => c === 'EURO (PM)');
    let datasets = [];
    if (this.state.data) {
      const dataForEuroPM = [];
      this.state.data.forEach(element => {
        dataForEuroPM.push(element[euroPM]);
      });
      datasets.push({
        label: this.state.columnNames[euroPM],
        backgroundColor: 'transparent',
        borderColor: 'rgb(255, 99, 132)',
        data: dataForEuroPM,
      });
    }

    const data1 = {
      labels: [past, present, future],
      datasets,
      options: {
        responsive: true,
        title: {
          display: true,
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Month',
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Value',
              },
            },
          ],
        },
      },
    };
    return (
      <div id="test">
        <Form hideRequiredMark={false}>
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
                    type="number"
                    onKeyUp={() =>
                      this.getOutput(this.props.inflationValue.inflation)
                    }
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
                <DatePicker
                  value={this.state.startDate}
                  onChange={this.handleStartDate}
                  className="DataPicker"
                  format="DD/MM/YYYY"
                />
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="End date">
                <DatePicker
                  value={this.state.endDate}
                  onChange={this.handleEndDate}
                  className="DataPicker"
                  format="DD/MM/YYYY"
                />
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem>
                <Checkbox className="Check" onChange={this.handleBackChange}>
                  Back
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
              <Line
                data={data1}
                height={400}
                options={{
                  maintainAspectRatio: false,
                }}
              />
            </Col>
            <Col span={10}>
              <Bar
                data={data}
                height={400}
                options={{
                  maintainAspectRatio: false,
                  scales: {
                    xAxes: [{ stacked: true }],
                    yAxes: [{ stacked: true }],
                  },
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
          <MsgLayout3
            visible={this.state.open}
            agree={this.handleAgree}
            disagree={this.handleDisagree}
          />
        </Form>
      </div>
    );
  }
}

Layout3.propTypes = {
  form: PropTypes.object,
  inflationValue: PropTypes.object,
  resetInflation: PropTypes.func,
};
const Wrapper = Form.create()(Layout3);

export default Wrapper;
