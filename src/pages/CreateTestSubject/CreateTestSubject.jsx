

import React from 'react';
import { Form, Input, InputNumber, Button, Typography } from 'antd';
import styles from './CreateTestSubject.module.scss';


const CreateTestSubject = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    alert(`Test Subject Code: ${values.code}\nDuration: ${values.duration} minutes\nQuestions: ${values.questions}`);
  };

  return (
    <div className={styles.container}>
      <Typography.Title level={2} className={styles.title}>Create Test Subject</Typography.Title>
      <Form
        form={form}
        layout="vertical"
        className={styles.form}
        onFinish={onFinish}
      >
        <Form.Item
          label="Test Subject Code"
          name="code"
          rules={[{ required: true, message: 'Please input the test subject code!' }]}
        >
          <Input className={styles.input} />
        </Form.Item>
        <Form.Item
          label="Test Duration (minutes)"
          name="duration"
          rules={[{ required: true, message: 'Please input the duration!' }]}
        >
          <InputNumber min={1} className={styles.input} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          label="Number of Questions"
          name="questions"
          rules={[{ required: true, message: 'Please input the number of questions!' }]}
        >
          <InputNumber min={1} className={styles.input} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.button} block>
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateTestSubject;
