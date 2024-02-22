import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { ProFormText } from "@ant-design/pro-components";
import { loginAccount } from "@/service/user";
import { setToken } from "@/utils";

import type { LoginValues } from "@/service/user";

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm<LoginValues>();
  const navigate = useNavigate();

  const jumpToRegistry = () => {
    navigate("/user/registry");
  };

  const handleLogin = async () => {
    const values = await form.validateFields();
    setLoading(true);
    const { result, success } = await loginAccount(values);
    if (success) {
      message.success(result || '登录成功');
      setToken('token');
      navigate('/dashbord');
    } else {
      message.error(result || '登录失败');
    }
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
        <h2 style={{ textAlign: "center" }}>登录界面</h2>
      </div>
      <div
        style={{
          width: "24vw",
        }}
      >
        <Form form={form}>
          <ProFormText
            name="account"
            fieldProps={{
              size: "large",
              prefix: <UserOutlined />,
            }}
            placeholder="账号: admin"
            rules={[
              {
                required: true,
                message: "请输入用账号!",
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: "large",
              prefix: <LockOutlined />,
            }}
            placeholder="密码: 123456"
            rules={[
              {
                required: true,
                message: "请输入密码！",
              },
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
            onClick={handleLogin}
          >
            登录
          </Button>
          <Button type="link" onClick={jumpToRegistry}>
            账号注册
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
