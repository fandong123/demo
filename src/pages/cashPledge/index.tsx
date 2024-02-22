import React, { useState } from "react";
import { Form, Button, message } from "antd";
import { ProFormText, ProFormDigit } from "@ant-design/pro-components";
import { waitTime } from "@/service/request";

const CashPledge: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleTopUp = async () => {
    await form.validateFields();
    setLoading(true);
    await waitTime(1000);
    message.success("充值成功");
    setLoading(false);
    form.resetFields();
  };

  return (
    <div style={{ width: "30vw" }}>
      <Form form={form}>
        <ProFormText
          name="merchantName"
          label="商家名称"
          placeholder="请输入商家名称"
          rules={[
            {
              required: true,
              message: "请输入商家名称!",
            },
          ]}
        />
        <ProFormText
          name="merchantNumber"
          label="商家电话"
          placeholder="请输入商家电话"
          rules={[
            {
              required: true,
              message: "请输入商家电话!",
            },
            {
              pattern: /^1[3456789]\d{9}$/,
              message: "格式不正确",
            },
          ]}
        />
        <ProFormText
          name="merchantAdress"
          label="商家地址"
          placeholder="请输入商家地址"
          rules={[
            {
              required: true,
              message: "请输入商家地址!",
            },
          ]}
        />
        <ProFormDigit
          name="merchantCash"
          label="商家押金"
          placeholder="请输入商家押金"
          rules={[
            {
              required: true,
              message: "请输入商家押金!",
            },
          ]}
        />
      </Form>
      <div
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   alignItems: "center",
      // }}
      >
        <Button
          type="primary"
          size="large"
          block
          loading={loading}
          onClick={handleTopUp}
        >
          充值
        </Button>
      </div>
    </div>
  );
};

export default CashPledge;
