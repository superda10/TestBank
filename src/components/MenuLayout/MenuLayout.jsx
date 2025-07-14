

import React from 'react';
import { Layout, Menu, Avatar, Button } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './MenuLayout.module.scss';
// Use logo from public folder

const { Header, Content, Sider } = Layout;

const items = [
  { key: '/app/import-question', label: <Link to="/app/import-question">Import Question</Link> },
  { key: '/app/create-test-subject', label: <Link to="/app/create-test-subject">Create Test Subject</Link> },
  { key: '/app/test-subject-list', label: <Link to="/app/test-subject-list">Test Subject List</Link> },
];

const MenuLayout = () => {
  const location = useLocation();
  // Find the matching menu key for the current path
  const selectedKey = items.find(item => location.pathname.startsWith(item.key))?.key || location.pathname;
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={240} className={styles.sider}>
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          items={items}
          className={styles.menu}
        />
      </Sider>
      <Layout>
        <Header className={styles.header}>
          <div className={styles.logoTitleWrap}>
            <img src={process.env.PUBLIC_URL + '/testbank-icon.svg'} alt="Test Bank Logo" className={styles.logoImg} />
            <span className={styles.title}>Test Bank</span>
          </div>
          <div className={styles.userActions}>
            <Avatar style={{ backgroundColor: '#fff', color: '#6366f1', marginRight: 16 }} icon={<span style={{fontWeight:700}}>U</span>} />
            <Button type="primary" danger onClick={() => {
              localStorage.removeItem('token');
              window.location.href = '/login';
            }}>
              Logout
            </Button>
          </div>
        </Header>
        <Content className={styles.content}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MenuLayout;
