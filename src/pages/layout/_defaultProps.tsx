import {
  ChromeFilled,
  CrownFilled,
  SmileFilled,
  TabletFilled,
  AreaChartOutlined,
  RadarChartOutlined
} from "@ant-design/icons";

import type { ProLayoutProps } from '@ant-design/pro-components';

const defaultProps: ProLayoutProps = {
  route: {
    path: "/",
    routes: [
      {
        path: "/dashbord",
        name: "首页",
        icon: <SmileFilled />,
      },
      {
        path: "/analysis",
        name: "数据分析",
        icon: <CrownFilled />,
      },
      {
        path: "/merchantMap",
        name: "商家地图",
        icon: <TabletFilled />,
      },
      {
        path: "/userMap",
        name: "用户地图",
        icon: <ChromeFilled />,
      },
      {
        path: "/mine",
        name: "我的",
        icon: <AreaChartOutlined />,
      },
      {
        path: "/cashPledge",
        name: "商家押金审核",
        icon: <RadarChartOutlined />,
      },
    ],
  },
};

export default defaultProps;