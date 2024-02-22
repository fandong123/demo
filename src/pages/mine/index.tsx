import React, { useState } from "react";
import { Form, Button, message } from "antd";
import { ProFormText } from "@ant-design/pro-components";
import { waitTime } from "@/service/request";

const initialFormValues = {
  username: "张三",
  number: "12345678912",
  account: "123123123",
  password: "123456",
  newPassword: "",
  oldPassword: "",
  confirmPassword: "",
};

const Mine: React.FC = () => {
  const [values, setValues] = useState(initialFormValues);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();

  const handleComfirm = async () => {
    const vals = await form.validateFields();
    const resultParams = {
      ...values,
      password: vals.newPassword
    }
    setLoading(true);
    await waitTime(1000);
    message.success("修改成功");
    setLoading(false);
    setValues(resultParams)
    form.resetFields();
    form.setFieldsValue(resultParams);
    setIsEditing(false);
  };

  return (
    <div style={{ width: "30vw" }}>
      <div
        style={{
          width: "24vw",
        }}
      >
        <Form
          form={form}
          labelCol={{ span: 4 }}
          initialValues={values}
        >
          <ProFormText
            name="username"
            label="姓名"
            placeholder="请输入姓名"
            disabled
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
            disabled
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
            disabled
            rules={[
              {
                required: true,
                message: "请输入账号!",
              },
            ]}
          />
          {!isEditing && (
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
          )}
          {isEditing && (
            <>
              <ProFormText.Password
                name="oldPassword"
                label="旧密码"
                placeholder="请输入旧密码"
                rules={[
                  {
                    required: true,
                    message: "请输入旧密码！",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("与旧密码不匹配！"));
                    },
                  }),
                ]}
              />
              <ProFormText.Password
                name="newPassword"
                label="新密码"
                placeholder="请输入新密码"
                rules={[
                  {
                    required: true,
                    message: "请输入新密码！",
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
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("两次密码密码不匹配！"));
                    },
                  }),
                ]}
              />
            </>
          )}
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
            disabled={!isEditing}
            block
            loading={loading}
            onClick={handleComfirm}
          >
            确认
          </Button>
          {!isEditing ? (
            <Button type="link" onClick={() => setIsEditing(true)}>
              去修改
            </Button>
          ) : (
            <Button type="link" onClick={() => setIsEditing(false)}>
              返回
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mine;
