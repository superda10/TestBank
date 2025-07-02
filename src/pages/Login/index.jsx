
import React, { useState } from 'react';
import { Button, Input, Form } from 'antd';
import styles from './index.module.scss';

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
    <div className={styles.loginBg}>
      <div className={styles.loginCard}>
        <div className={styles.logoWrap}>
          <img src={process.env.PUBLIC_URL + '/testbank-icon.svg'} alt="TestBank Logo" className={styles.logoImg} />
          <div className={styles.title}>TestBank</div>
        </div>
        <div className={styles.formWrap}>
          <Form name="login" onFinish={onFinish} layout="vertical" className="w-full">
            <Form.Item name="username" label="Username" rules={[{ required: true, message: 'Please input your username!' }]}> 
              <Input size="large" placeholder="Username" autoFocus />
            </Form.Item>
            <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please input your password!' }]}> 
              <Input.Password size="large" placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} block size="large" className={styles.loginBtn}>
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
