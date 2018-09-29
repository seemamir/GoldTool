import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';
import InputBox from './form';

class BtnFrom extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Modal
          title="Basic Modal"
          visible={this.props.visible}
          onOk={this.props.handleOk}
          onCancel={this.props.handleCancel}
        >
          <InputBox />
        </Modal>
      </div>
    );
  }
}
BtnFrom.defaultProps = {
  visible: false,
  handleOk: () => {},
  handleCancel: () => {},
};
BtnFrom.propTypes = {
  visible: PropTypes.bool,
  handleOk: PropTypes.func,
  addNewOb: PropTypes.func,
  handleCancel: PropTypes.oneOfType([PropTypes.object]),
};
export default BtnFrom;
