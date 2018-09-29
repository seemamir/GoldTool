import React from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

const InputBox = () => {
  return (
    <Form onSubmit={this.handleSubmit}>
      <FormItem label="Note" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
        <Input />
      </FormItem>
      <FormItem
        label="Inputvalue"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 12 }}
      >
        <Input />
      </FormItem>
      <FormItem wrapperCol={{ span: 12, offset: 5 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </FormItem>
    </Form>
  );
};
export default InputBox;
