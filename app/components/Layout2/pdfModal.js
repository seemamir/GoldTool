import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';

const PdfModal = props => (
  <Modal
    title="Export Pdf"
    visible={props.visible}
    onCancel={props.disagree}
    footer={[
      <Button key="back" onClick={props.agree}>
        Agree
      </Button>,
      <Button key="back" onClick={props.disagree}>
        Disagree
      </Button>,
    ]}
  >
    <p>Hello World</p>
  </Modal>
);

PdfModal.propTypes = {
  visible: PropTypes.bool,
  disagree: PropTypes.func,
  agree: PropTypes.func,
};
export default PdfModal;
