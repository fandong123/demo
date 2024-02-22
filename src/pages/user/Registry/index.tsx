import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, message } from "antd";
import { ProFormText } from "@ant-design/pro-components";
import { registryAccount } from "@/service/user";

import type { RegistryValues } from "@/service/user";

const Registry: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm<RegistryValues>();
  const navigate = useNavigate();

  const jumpToLogin = () => {
    navigate("/user/login");
  };

  const handleRegistry = async () => {
    const values = await form.validateFields();
    setLoading(true);
    const { result, success } = await registryAccount(values);
    if (success) {
      message.success(result || "注册成功");
    } else {
      message.error(result || "注册失败");
    }
    form.resetFields();
    setLoading(false);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div>
        <h2 style={{ textAlign: "center" }}>注册界面</h2>
      </div>
      <div
        style={{
          width: "24vw",
        }}
      >
        <Form form={form} labelCol={{ span: 4 }}>
          <ProFormText
            name="username"
            label="姓名"
            placeholder="请输入姓名"
            rules={[
              {
                required: true,
                message: "请输入姓名!",
              },
            ]}
          />
          <ProFormText
            name="number"
            label="电话"
            placeholder="请输入电话"
            rules={[
              {
                required: true,
                message: "请输入电话!",
              },
            ]}
          />
          <ProFormText
            name="account"
            label="账号"
            placeholder="请输入账号"
            rules={[
              {
                required: true,
                message: "请输入账号!",
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            label="密码"
            placeholder="请输入密码"
            rules={[
              {
                required: true,
                message: "请输入密码！",
              },
            ]}
          />
          <ProFormText.Password
            name="confirmPassword"
            label="确认密码"
            placeholder="请确认密码"
            rules={[
              {
                required: true,
                message: "请确认密码！",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("两次密码密码不匹配！"));
                },
              }),
            ]}
          />
        </Form>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            type="primary"
            size="large"
            block
            loading={loading}
            onClick={handleRegistry}
          >
            注册
          </Button>
          <Button type="link" onClick={jumpToLogin}>
            去登录
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Registry;
