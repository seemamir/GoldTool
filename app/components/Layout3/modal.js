import React from 'react';
import { Modal, Button } from 'antd';

const MsgLayout3 = props => (
  <div>
    <Modal
      title="Export Pdf"
      visible={props.visible}
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
  </div>
);

export default MsgLayout3;
