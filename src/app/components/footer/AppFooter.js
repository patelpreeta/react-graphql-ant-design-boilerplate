//! Ant Imports

import Layout from "antd/lib/layout";

const { Footer } = Layout;

const AppFooter = () => {
  const year = new Date().getFullYear();
  return (
    <Footer className="app-footer-wrapper">
      <div> © {year}</div>
    </Footer>
  );
};
export default AppFooter;
