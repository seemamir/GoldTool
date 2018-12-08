import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';

const Msg = props => (
  <div>
    <Modal
      visible={props.visible}
      onCancel={props.cancel}
      footer={[
        <Button key="back" onClick={props.agree}>
          Bestaetigen
        </Button>,
      ]}
    >
      <p>Zusatzkosten entstehen von 299</p>
    </Modal>
  </div>
);

Msg.propTypes = {
  visible: PropTypes.bool,
  cancel: PropTypes.func,
  agree: PropTypes.func,
};
export default Msg;
