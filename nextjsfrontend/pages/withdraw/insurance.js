import React from "react";
import "antd/dist/antd.css";
import { Breadcrumb, Layout, Menu, Button } from "antd";

import Image from "next/image";
import Link from "next/link";

const { Header, Content, Footer } = Layout;

const insurance = () => (
  <Layout>
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <p style={{ color: "white", fontSize: "20px" }}>Oxerium-Mutual</p>
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        {" "}
        <div
          style={{ display: "flex", gap: "1.5rem", textTransform: "uppercase" }}
        >
          <p>Overview</p>
          <p>Token Modal</p>
          <p>Careers</p>
          <p>Whitepaper</p>
        </div>
      </Menu>
    </Header>
    <Content
      className="site-layout"
      style={{
        marginTop: 64,
      }}
    >
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: "calc(100vh - 65px)",
          background: "#001528",
          color: "white",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div class="flex-container">
          <div class="content-container">
            <div class="form-container">
         
                <h1 style={{marginBottom:"-1.5rem"}}>Insured Details</h1>
                <br />
                <br />
                <span class="subtitle" >Insured Ammount:</span>
                <br />
                <input type="number" name="username" />
                <br />
                <span class="subtitle">Starting Time:</span>
                <br />
                <input type="password" name="password"/>
                <br />
                <span class="subtitle">Time Passed:</span>
                <br />
                <input type="text" name="password"/>
                <br />
                <span class="subtitle">Ready to Pay:</span>
                <br />
                <input type="text" name="password"/>
                <br />
                <input type="submit" value="SUBMIT" class="submit-btn" />
                <br />
                <br />
            </div>
          </div>
        </div>
      </div>
    </Content>
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      Oxerium ©2022 Created by Us.
    </Footer>
  </Layout>
);

export default insurance;
