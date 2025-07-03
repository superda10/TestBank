
import React, { useState } from 'react';
import styles from './CreateTestSubject.module.scss';

const CreateTestSubject = () => {
  const [form, setForm] = useState({
    code: '',
    duration: '',
    questions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    alert(`Test Subject Code: ${form.code}\nDuration: ${form.duration} minutes\nQuestions: ${form.questions}`);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create Test Subject</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label className={styles.label} htmlFor="code">Test Subject Code</label>
          <input
            className={styles.input}
            id="code"
            name="code"
            type="text"
            value={form.code}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="duration">Test Duration (minutes)</label>
          <input
            className={styles.input}
            id="duration"
            name="duration"
            type="number"
            min="1"
            value={form.duration}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="questions">Number of Questions</label>
          <input
            className={styles.input}
            id="questions"
            name="questions"
            type="number"
            min="1"
            value={form.questions}
            onChange={handleChange}
            required
          />
        </div>
        <button className={styles.button} type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateTestSubject;
