import React from "react";
import AppRoute from "./AppRoute";
import { Layout } from "antd";
import Header from "../../components/Header";

const PageContents = () => {
  const { Content } = Layout;
  return (
    <Content className="bg-[#F3F4FF] p-9">
      <Header />
      <AppRoute />
    </Content>
  );
};

export default PageContents;
