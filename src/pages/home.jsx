import { Layout } from "antd";
import React, { useContext, useEffect, useRef } from "react";
import Sidebar from "../layout/sider";
import Nav from "../layout/nav";
import { Content } from "antd/es/layout/layout";
import { Route, Routes } from "react-router-dom";
import ExportPage from "./export";
import ImportPage from "./import";
import CompanyDocs from "./companyDocs";
import Docs from "../components/docs";
import Docs2 from "./docs";
import { ThemeContext } from "../context/context";
import NotFound from "./not-found";

export default function Home() {
  const [theme] = useContext(ThemeContext);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <Layout ref={contentRef}>
      <Sidebar />
      <Layout>
        <Nav />
        <Content
          style={{
            margin: "24px 16px 0",
            height: "100vh",
            borderRadius: "10px",
            padding: "10px",
            paddingBottom: "200px",
          }}
          className={`${
            theme && "dark:bg-[#092635] text-white"
          } scrollbar-thin h-32 overflow-y-scroll`}
        >
          <Routes>
            <Route path="/" element={<Docs />} />
            <Route path="/export" element={<ExportPage />} />
            <Route path="/export/:id" element={<CompanyDocs />} />
            <Route path="/export/:id/:idnew" element={<Docs2 />} />
            <Route path="/import" element={<ImportPage />} />
            <Route path="/import/:id" element={<CompanyDocs />} />
            <Route path="/import/:id/:idnew" element={<Docs2 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}
