import React, { useState, useEffect } from "react";
import { Table, Spin } from "antd";
import { queryMerchantInfo } from "@/service/merchant";

import type { TableProps } from "antd";
import type { MerchantListItem } from "@/service/merchant";

const Dashbord: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState<MerchantListItem[]>([]);

  const getMerchantInfo = async () => {
    setLoading(true);
    const { result, success } = await queryMerchantInfo();
    if (success) {
      setDataSource(result);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMerchantInfo();
  }, []);

  const cloumns: TableProps<MerchantListItem>["columns"] = [
    {
      title: "商家账号",
      dataIndex: "merchantAccout",
    },
    {
      title: "商家名称",
      dataIndex: "merchantName",
    },
    {
      title: "商家押金",
      dataIndex: "merchantCash",
    },
  ];

  return (
    <Spin spinning={loading}>
      <Table rowKey="merchantAccout" dataSource={dataSource} columns={cloumns} />
    </Spin>
  );
};

export default Dashbord;
