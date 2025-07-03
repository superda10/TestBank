


import React from 'react';
import { Table, Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './TestSubjectList.module.scss';


const testSubjects = [
  { code: 'MATH101', duration: 60, questions: 40 },
  { code: 'ENG202', duration: 45, questions: 30 },
  { code: 'SCI303', duration: 90, questions: 50 },
];



const handleTakeTest = (navigate, code) => {
  navigate('/test', { state: { code } });
};



const TestSubjectList = () => {
  const navigate = useNavigate();
  const columns = [
    {
      title: 'Test Subject Code',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Test Duration (minutes)',
      dataIndex: 'duration',
      key: 'duration',
    },
    {
      title: 'Number of Questions',
      dataIndex: 'questions',
      key: 'questions',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button type="primary" onClick={() => handleTakeTest(navigate, record.code)}>
          Take Test
        </Button>
      ),
    },
  ];
  return (
    <div className={styles.container}>
      <Typography.Title level={2} className={styles.title}>
        Test Subject List
      </Typography.Title>
      <Table
        columns={columns}
        dataSource={testSubjects}
        rowKey="code"
        pagination={false}
      />
    </div>
  );
};

export default TestSubjectList;
