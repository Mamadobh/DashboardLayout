import { Avatar, Badge, Space, Typography } from "antd";
import React from "react";
import { useLocation } from "react-router";
import { getTitle } from "../config/headerConfig/headerTile";
import { BellOutlined, SettingOutlined } from "@ant-design/icons";
import HeaderIcon from "./HeaderIcon";
import UserInfo from "./UserInfo";
import UserAvatar from "./UserAvatar";
import { useMediaQuery } from "react-responsive";
const Header = () => {
  const location = useLocation();
  const title = getTitle(location.pathname);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="flex justify-between	items-center">
      <Typography.Title
        className="text-[#303972] font-bold	text-3xl max-lg:text-2xl max-md:text-xl"
        level={2}>
        {title}
      </Typography.Title>
      <div className="flex gap-4 max-sm :gap-2">
        <HeaderIcon isdot={true}>
          <BellOutlined
            className={`${isSmallScreen ? "text-xl	" : "text-2xl	"}`}
          />
        </HeaderIcon>
        <HeaderIcon isdot={false} className=" max-md:hidden">
          <SettingOutlined
            className={`${isSmallScreen ? "text-xl	" : "text-2xl	"}`}
          />
        </HeaderIcon>
        <UserInfo />
        <UserAvatar />
      </div>
    </div>
  );
};

export default Header;
