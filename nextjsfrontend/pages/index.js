import React from 'react';
import 'antd/dist/antd.css';
import { Breadcrumb, Layout, Menu ,Button} from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import img from '../public/logo1.png';
import img2 from '../public/logo2.png';
import user from '../public/user.png';
const { Header, Content, Footer } = Layout;

const Home = () => (
  <Layout>
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        display:"flex",
        justifyContent:"space-between"
      }}
    >
      
      <div >
        <p style={{color:"white",fontSize:"20px",}}>Oxerium-Mutual</p>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        
      > <div style={{display:"flex",gap:"1.5rem",textTransform:"uppercase"}}>
          <p>Overview</p>
          <p>Token Modal</p>
          <p>Careers</p>
          <p>Whitepaper</p>

          </div></Menu>
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
          background:"#001528",
          color:"white",
          width:"100vw",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
        }}
      >
       <div style={{width:"50vw",minHeight:"500px",display:"flex",flexDirection:"column",marginTop:"3rem"}}>
        <p style={{fontSize:"50px",fontWeight:"bolder",letterSpacing:"2px",textAlign:"justify",textAlignLast:"center"}}>Get covered against smart contract failure & exchange hacks.</p>
        <div style={{margin:"0rem 5rem",display:"flex",justifyContent:"space-between"}}>
        <Link href={"/withdraw/insured"}><Button danger style={{background:"#001528",height:'50px',width:"202px",borderWidth:"2px"}}>Insured</Button></Link>
        <Link href={"https://lib.openlaw.io/web/default/contract/60dbdfe22a0da639db1a501d10f66598a8a70bc5e8055e53556634fe41eca909"}><Button danger style={{background:"#001528",height:'50px',width:"202px",borderWidth:"2px"}}>View Aggrement</Button></Link>
        <Link href={"/withdraw/insurance"}><Button danger style={{background:"#001528",height:'50px',width:"150px",borderWidth:"2px"}}>Insurance</Button></Link>
        </div>
       </div>
      </div>
    <section class="about" id="about">
       <div class="max-width">
           <h2 class="title" style={{
           marginTop:"100px",
           marginBottom:"0px",
          }}>Math Based Solution </h2>
           <div class="about-content">
               <div class="column left">
               <div>
                <Image src={img2} 
                    alt="GFG logo imported from public directory" />
            </div>
               </div>
               <div class="column right">
                   <div class="text">
                    <p> OxyMutual uses the power of Block chain so people can share risk together without the need for an insurance company.</p> <span></span></div>
                   <a href="https://lib.openlaw.io/web/default/contract/60dbdfe22a0da639db1a501d10f66598a8a70bc5e8055e53556634fe41eca909" class="btn">Read More</a>
               </div>
           </div>
       </div>
   </section>
   <section class="about" id="about">
       <div class="max-width">
           <h2 class="title">Hand in Hand with Government</h2>
           <div class="about-content">
              
               <div class="column2 left1">
                  
                   <p> Secure risk and potential bugs in smart contract code. Be covered for events like The DAO hack or Parity multi-sig wallet issues.</p>
                   ,<div><p>
                   Purchase Smart Insurance Contract Cover
                   </p>
                    </div>
                    <div class="text">@<span> Oxerium</span></div>
                   <a href="#" class="btn">Read More</a>
               </div>
               <div class="column right1">
               <div>
                <Image src={img} 
                    alt="GFG logo imported from public directory" />
            </div>
                  </div>
           </div>
       </div>
   </section>
   
   <section class="services" id="services">
        <div class="max-width">
            <h2 class="title"><br></br>Our Team Members</h2>
        
            <div class="serv-content">
                <div class="card">
                    <div class="box">
                    <div>
                    <Image src={user} 
                    alt="GFG logo imported from public directory" />
                    </div>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                    <div>
                    <Image src={user} 
                    alt="GFG logo imported from public directory" />
                    </div>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                    <div>
                    <Image src={user} 
                    alt="GFG logo imported from public directory" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <br></br>
        <div class="max-width">
            <h2 class="title"></h2>
            <div class="serv-content">
            </div>
        </div>
    </section>
    </Content>
    <Footer className='footer'
      style={{
        alignItems:'center',
        textAlign: 'center',
      }}>
      <p>Oxerium ©2022 Created by Us.</p>
    </Footer>
  </Layout>
);

export default Home;