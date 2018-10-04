import React from 'react';
import { Modal, Button } from 'antd';

const Msg = props => (
  <div>
    <Modal
      visible={props.visible}
      onCancel={props.cancel}
      footer={[
        <Button key="back" onClick={props.cancel}>
          Bestaetigen
        </Button>,
      ]}
    >
      <p>Zusatzkosten entstehen von 299</p>
    </Modal>
  </div>
);

export default Msg;
