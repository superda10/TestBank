import React, { useState } from 'react';
import { Button, Input, Form } from 'antd';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Logged in as ${values.username}`);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-sm p-8 bg-gray-50 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <Form name="login" onFinish={onFinish} layout="vertical">
          <Form.Item name="username" label="Username" rules={[{ required: true, message: 'Please input your username!' }]}> 
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please input your password!' }]}> 
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
