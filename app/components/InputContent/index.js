/**
 *
 * Input
 *
 */

import React from 'react';
import { Input, DatePicker, Form, Row, Col } from 'antd';
// const { RangePicker } = DatePicker;
import moment from 'moment';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
const FormItem = Form.Item;
/* eslint-disable react/prefer-stateless-function */
class InputContent extends React.Component {
  render() {
    return (
      <div className="gutter-example">
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <FormItem label="Amount in Euro">
              <Input
                className="example-input"
                placeholder="Amount in Euro"
                // className="input-item"
              />
            </FormItem>
          </Col>
          <Col className="gutter-row" span={6}>
            <FormItem label="Time in year">
              <Input placeholder="time in year" className="example-input" />
            </FormItem>
          </Col>
          <Col className="gutter-row" span={6}>
            <FormItem label="Start date">
              <DatePicker
                defaultValue={moment('2015/01/01')}
                className="DataPicker"
              />
            </FormItem>
          </Col>
          <Col className="gutter-row" span={6}>
            <FormItem label="End">
              <DatePicker
                defaultValue={moment('2015/01/01')}
                className="DataPicker"
              />
            </FormItem>
          </Col>
        </Row>
      </div>
    );
  }
}

InputContent.propTypes = {};

export default InputContent;
