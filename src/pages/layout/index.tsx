import { LogoutOutlined } from "@ant-design/icons";
import { PageContainer, ProCard, ProLayout } from "@ant-design/pro-components";
import { Dropdown } from "antd";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import defaultProps from "./_defaultProps";
import { removeToken, getToken } from "@/utils";

const Layout: React.FC = () => {
  const navigate = useNavigate();

  const logOut = () => {
    removeToken();
    navigate("/user/login");
  };
  
  useEffect(() => {
    if (!getToken()) {
      navigate("/user/login");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <ProLayout
        title="运营平台"
        logo={null}
        layout="mix"
        avatarProps={{
          src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
          size: "small",
          title: "admin",
          render: (props, dom) => {
            return (
              <Dropdown
                menu={{
                  items: [
                    {
                      key: "logout",
                      icon: <LogoutOutlined />,
                      label: <span onClick={logOut}>退出登录</span>,
                    },
                  ],
                }}
              >
                {dom}
              </Dropdown>
            );
          },
        }}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              navigate(item.path || "/dashbord");
            }}
          >
            {dom}
          </div>
        )}
        {...defaultProps}
      >
        <PageContainer>
          <ProCard
            style={{
              height: "100vh",
              minHeight: 800,
            }}
          >
            <Outlet />
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default Layout;
