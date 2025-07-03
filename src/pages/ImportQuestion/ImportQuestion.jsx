

import React, { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import styles from './ImportQuestion.module.scss';

const ImportQuestion = () => {
  const [fileList, setFileList] = useState([]);

  const beforeUpload = (file) => {
    const isDocx = file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    if (!isDocx) {
      message.error('You can only upload DOCX files!');
    }
    return isDocx || Upload.LIST_IGNORE;
  };

  const handleChange = ({ fileList }) => {
    setFileList(fileList);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Import Questions (.docx)</h2>
      <div className={styles.uploadWrap}>
        <Upload
          accept=".docx"
          beforeUpload={beforeUpload}
          onChange={handleChange}
          fileList={fileList}
          maxCount={1}
          showUploadList={{ showRemoveIcon: true }}
        >
          <Button type="primary" icon={<UploadOutlined />}>Select DOCX File</Button>
        </Upload>
        <div className={styles.tips}>
          Only .docx files are accepted. Please upload your question file.<br/>
          Max 1 file at a time.
        </div>
      </div>
    </div>
  );
};

export default ImportQuestion;
