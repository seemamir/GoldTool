import React from 'react';
import { Modal, Form, Input, Radio } from 'antd';
import PropTypes from 'prop-types';

const FormItem = Form.Item;

const BtnForm = props => {
  const { visible, onCancel, onOk } = props;
  const { getFieldDecorator } = form;
  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      onCancel={onCancel}
      onOk={onOk}
    >
      <Form layout="vertical">
        <FormItem label="Title">
          {getFieldDecorator('title', {
            rules: [
              {
                required: true,
                message: 'Please input the title of collection!',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="Description">
          {getFieldDecorator('description')(<Input type="textarea" />)}
        </FormItem>
        <FormItem className="collection-create-form_last-form-item">
          {getFieldDecorator('modifier', {
            initialValue: 'public',
          })(
            <Radio.Group>
              <Radio value="public">Public</Radio>
              <Radio value="private">Private</Radio>
            </Radio.Group>,
          )}
        </FormItem>
      </Form>
    </Modal>
  );
};
BtnForm.DefaultProp = {
  visible: false,
  onCancel: () => null,
  onOk: () => null,
  //   data: {},
};
BtnForm.propTypes = {
  visible: PropTypes.bool,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
  // data: //PropTypes.oneOfType([PropTypes.object])
};
export default BtnForm;
