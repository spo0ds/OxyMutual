import React from "react";
import "antd/dist/antd.css";
import { Breadcrumb, Layout, Menu, Button } from "antd";

import Image from "next/image";
import Link from "next/link";

const { Header, Content, Footer } = Layout;

const insured = () => (
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
          <p>Account</p>
          <p>Balance</p>
          <p>Contract</p>
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
         
                <h1 style={{marginBottom:"-1.5rem"}}>Update information</h1>
                <br />
                <span class="subtitle" ></span>
                <br />
                <div class="field name">
                    <input type="CheckUpkeep" name="CheckUpkeep" placeholder='CheckUpkeep' />
                    
                <input type="submit" value="SUBMIT" class="submit-btn" />
                    </div>
                <br />
                <div class="field name">
                    <input type="PerformanceUPkeep" name="PerformanceUPkeep" placeholder='PerformanceUPkeep' />
                    
                <input type="submit" value="SUBMIT" class="submit-btn" />
                      </div>
                <br />

                <div class="field name">
                    <input type="rightToClaim" name="rightToClaim" placeholder='rightToClaim' />
                <input type="submit" value="SUBMIT" class="submit-btn" />
                 </div>
                <br />

                <div class="field name">
                    <input type="isTwoConsutiv" name="isTwoConsutiv" placeholder='isTwoConsutiv' />
                <input type="submit" value="SUBMIT" class="submit-btn" />
                      </div>
                <br />
                <div class="field name">
                    <input type="rightToClaim" name="rightToClaim" placeholder='rightToClaim' />
                <input type="submit" value="SUBMIT" class="submit-btn" />
                 </div>
                 <div class="field name">
                    <input type="rightToClaim" name="rightToClaim" placeholder='rightToClaim' />
                <input type="submit" value="SUBMIT" class="submit-btn" />
                 </div>
                 <div class="field name">
                    <input type="rightToClaim" name="rightToClaim" placeholder='rightToClaim' />
                <input type="submit" value="SUBMIT" class="submit-btn" />
                 </div>
                 <div class="field name">
                    <input type="rightToClaim" name="rightToClaim" placeholder='rightToClaim' />
                <input type="submit" value="SUBMIT" class="submit-btn" />
                 </div>
                 <div class="field name">
                    <input type="rightToClaim" name="rightToClaim" placeholder='rightToClaim' />
                <input type="submit" value="SUBMIT" class="submit-btn" />
                 </div>
                 <br>
                 </br>
                
        
            </div>
          </div>
        </div>
      </div>
    </Content>
    </Layout>
);
export default insured;
