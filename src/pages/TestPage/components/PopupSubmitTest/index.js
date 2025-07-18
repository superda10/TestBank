import React from "react";
import { Modal, Typography } from "antd";

const PopupSubmitTest = ({ open, result, onOk, setOpen }) => {
  return (
    <Modal
      open={open}
      title="Your Grade"
      onOk={onOk}
      onCancel={() => setOpen(false)}
      okText="Go to Test List"
      cancelText="Close"
      centered
    >
      <Typography.Title level={3} style={{ textAlign: "center" }}>
        {result?.score}%
      </Typography.Title>
      <Typography.Paragraph style={{ textAlign: "center" }}>
        You answered {result?.score === null ? 0 : Math.round((result?.score / 100) * result?.max_score)} out of {result?.max_score} questions correctly.
      </Typography.Paragraph>
    </Modal>
  );
};

export default PopupSubmitTest;
