import React from 'react';
// import PropTypes from 'prop-types';
import { Button } from 'antd';
import BtnForm from './Form';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class InputForm extends React.Component {
  constructor() {
    super();

    this.state = {
      visible: false,
    };
  }
  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.props.showModal}>
          New Collection
        </Button>
        <BtnForm
          // wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          // onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

// InputForm.defaultProps = {
//   // item: {}
// };
// InputForm.propTypes = {
//   item: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
// };
InputForm.propTypes = {
  visible: false,
  showModal: () => null,
  handleCancel: () => null,
  // data: {},
};
export default InputForm;
