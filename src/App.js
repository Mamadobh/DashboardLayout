import { ConfigProvider, Layout } from "antd";
import PageContents from "./config/PageContent/PageContents";
import SideMenu from "./config/sideMenu/SideMenu";

function App() {

  return (
    <div className="App">
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemColor: "#C1BBEB",
              itemActiveBg: "#F3F4FF",
              itemSelectedColor: "#4D44B5",
              itemSelectedBg: "#F3F4FF",
              itemBg: "transparent",
              itemHoverColor: "#C1BBEB",
              itemPaddingInline: "0px",
              iconMarginInlineEnd: "20px",
              iconSize: 16,
              itemMarginBlock: "15px",
              // itemMarginInline: "0px",
            },
          },
        }}>
        <Layout hasSider style={{ height: "100vh" }} className="bg-transparent">
          <SideMenu />
          <PageContents/>
        </Layout>
      </ConfigProvider>
    </div>
  );
}

export default App;
