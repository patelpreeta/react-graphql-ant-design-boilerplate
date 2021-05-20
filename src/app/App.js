//! Ant Imports

import Layout from "antd/lib/layout";

//! User Files

import AppHeader from "./components/header/AppHeader";
import AppFooter from "./components/footer/AppFooter";
import ContentRoutes from "./ContentRoutes";
import "./App.less";

const { Content } = Layout;

const App = () => {
  return (
    <Layout className="app-wrapper">
      <Layout>
        <AppHeader />
        <Content className="app-content-wrapper">
          <div className="app-content-wrapper-div">
            <ContentRoutes />
          </div>
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default App;
