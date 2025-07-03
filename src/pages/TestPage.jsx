
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card, Typography, Button, Radio, Space, Divider, message } from 'antd';


// Example questions (in real app, fetch from API or pass via state)
const exampleQuestions = [
  {
    id: 1,
    text: 'What is 2 + 2?',
    choices: ['3', '4', '5', '6'],
  },
  {
    id: 2,
    text: 'What is the capital of France?',
    choices: ['Berlin', 'London', 'Paris', 'Rome'],
  },
  {
    id: 3,
    text: 'Which planet is known as the Red Planet?',
    choices: ['Earth', 'Mars', 'Jupiter', 'Venus'],
  },
];

const getDurationByCode = (code) => {
  // Example: you can map code to duration, or pass duration via state
  if (code === 'MATH101') return 60;
  if (code === 'ENG202') return 45;
  if (code === 'SCI303') return 90;
  return 30;
};

const TestPage = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  // Timer logic
  const duration = getDurationByCode(code); // in minutes
  const [secondsLeft, setSecondsLeft] = useState(duration * 60);
  const timerRef = useRef();

  useEffect(() => {
    if (!code) return;
    timerRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          message.info('Time is up!');
          // Optionally, auto-submit here
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [code]);

  // Question/answer state
  const [answers, setAnswers] = useState({});

  if (!code) {
    // If accessed directly, redirect to home or show error
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card>
          <Typography.Title level={3}>No Test Selected</Typography.Title>
          <Typography.Paragraph>
            Please select a test from the Test Subject List.
          </Typography.Paragraph>
          <Button type="primary" onClick={() => navigate('/')}>Go Home</Button>
        </Card>
      </div>
    );
  }

  // Format timer as mm:ss
  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const today = new Date().toLocaleDateString();

  const handleChange = (qid, value) => {
    setAnswers((prev) => ({ ...prev, [qid]: value }));
  };

  const handleSubmit = () => {
    message.success('Test submitted!');
    // Optionally, process answers here
    navigate('/app/test-subject-list');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '100vh', background: '#f5f6fa' }}>
      <Card style={{ minWidth: 400, marginTop: 40, width: '90vw', maxWidth: 1200 }}>
        <Typography.Title level={2} style={{ textAlign: 'center', marginBottom: 0 }}>{code}</Typography.Title>
        <Typography.Text type="secondary" style={{ display: 'block', textAlign: 'center', marginBottom: 8 }}>{today}</Typography.Text>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <Typography.Text strong style={{ fontSize: 18 }}>Time Left: <span style={{ color: '#fa541c' }}>{formatTime(secondsLeft)}</span></Typography.Text>
        </div>
        <Divider />
        {exampleQuestions.map((q, idx) => (
          <div key={q.id} style={{ marginBottom: 24 }}>
            <Typography.Text strong>Question {idx + 1}:</Typography.Text>
            <Typography.Paragraph style={{ marginBottom: 8 }}>{q.text}</Typography.Paragraph>
            <Radio.Group
              onChange={e => handleChange(q.id, e.target.value)}
              value={answers[q.id]}
              style={{ display: 'block' }}
            >
              <Space direction="vertical">
                {q.choices.map((choice, i) => (
                  <Radio key={i} value={choice}>{choice}</Radio>
                ))}
              </Space>
            </Radio.Group>
          </div>
        ))}
        <Divider />
        <div style={{ textAlign: 'center' }}>
          <Button type="primary" size="large" onClick={handleSubmit} disabled={secondsLeft === 0}>
            Submit Test
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default TestPage;
