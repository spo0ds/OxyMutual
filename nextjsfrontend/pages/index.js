import React from 'react';
import 'antd/dist/antd.css';
import { Breadcrumb, Layout, Menu ,Button} from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import val2 from '../public/logo2.png';
import val from '../public/validator.png';
import gov from '../public/gov.png';
import law from '../public/lawer.png';
import img2 from '../public/logo1.png';
import img3 from '../public/insurance.png';

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
        <p style={{color:"white",fontSize:"20px",}}>OxyMutual</p>
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
        <div className="effect effect-1"></div>
            <div className="effect effect-2"></div>
            <div className="effect effect-1"></div>
       <div style={{width:"50vw",minHeight:"500px",display:"flex",flexDirection:"column",marginTop:"3rem"}}>
        <p style={{fontSize:"45px",fontWeight:"bolder",letterSpacing:"2px",textAlign:"justify",textAlignLast:"center"}}> Get covered against smart contract failure & exchange hacks.</p>
        <div style={{margin:"0rem 5rem",display:"flex",justifyContent:"space-between"}}>
        <Link href={"/insured"}><Button danger style={{background:"#001528",height:'55px',width:"190px",borderWidth:"2px"}}>Insured</Button></Link>
        <Link href={"https://lib.openlaw.io/web/default/contract/60dbdfe22a0da639db1a501d10f66598a8a70bc5e8055e53556634fe41eca909"}><Button danger style={{background:"#001528",height:'55px',width:"190px",borderWidth:"2px"}}>View Aggrement</Button></Link>
        <Link href={"/insurance"}><Button danger style={{background:"#001528",height:'55px',width:"190px",borderWidth:"2px"}}>Insurance </Button></Link>
        </div>
        
       </div>
      </div>
    <section className="about" id="about">
       <div className="max-width">
           <h2 className="title" style={{
           marginTop:"100px",
           marginBottom:"0px",
          }}>Math Based Solution </h2>
           <div className="about-content">
               <div className="column left">
               <div className='img'>
                <Image src={img2} 
                    alt="GFG logo imported from public directory" />
            </div>
               </div>
               <div className="column right">
                   <div className="text">
                    <p> One plus one is always going to equal two in the math world. Whatever the code determines is the input and output, that's exactly what's going to happen every single time. These all add up to two major pieces freedom and trustlessness.</p> <span></span></div>
                   <a href= "https://github.com/spo0ds/Journey-to-become-a-Blockchain-Engineer/blob/main/Day01/Day01.md"className="btn">Read More</a>
               </div>
           </div>
       </div>
   </section>
   <section className="about" id="about">
       <div className="max-width">
           <h2 className="title">Hand in Hand with Government</h2>
           <div className="about-content">
               <div className="column2 left1">
                   <p>OxyMutual make a openlaw with the validators from the different secotr of the government which basically includes  Lawyers, Insurance parties, National Insurance,Government representatives.

                   </p>
                    <div className="text"><span>Oxyreium</span></div>
                   <a href="#" className="btn">Read More</a>
               </div>
               <div className="column right1">
               <div>
                <Image src={gov} 
                    alt="GFG logo imported from public directory" />
            </div>
                  </div>
           </div>
       </div>
   </section>
   <section>
    <div className="services">
      
   <div className="hand-in-hand">
     <div className="box-wrapper">
        <div className=" box3">
            <div className="box3 box4">
            <div>
                <Image src={law} 
                    alt="GFG logo imported from public directory" />
                    
            </div>
            </div>
            <div className="box3 box4">
            <div>
                <Image src={val2} 
                    alt="GFG logo imported from public directory" />
                    
            </div>
            </div>
            <div className="box3 box4">
            <div style={{ border_radius:"22px"}}>
                <Image src={val} 
                    alt="GFG logo imported from public directory" />
                    <a style={{ color:"black"}}> validators</a>
            </div>
            </div>
        </div>
    </div>

     </div>
    </div>

   </section>
   {/* ---------------------------- */}
   <section className="about" id="about">
       <div className="max-width">
           <h2 className="title" style={{
           marginTop:"100px",
           marginBottom:"0px",
          }}>OxyMutual to Replace  Paperbased Insurance</h2>
           <div className="about-content">
               <div className="column left">
               <div className='img'>
                <Image src={img3} 
                    alt="GFG logo imported from public directory" />
            </div>
               </div>
               <div className="column right">
                   <div className="text">
                    <p> We are building an alternative risk sharing platform. In the future we plan to offer crypto wallet cover, as well as more standard products, like earthquake cover.</p> <span></span></div>
                   <a href= "https://github.com/spo0ds/Journey-to-become-a-Blockchain-Engineer/blob/main/Day01/Day01.md"className="btn">Read More</a>
               </div>
           </div>
       </div>
   </section>

   
   <section className="services" id="services">
  
        <div className="max-width">
            <h2 className="title"><br></br>Our Team Members</h2>
            <div className="serv-content">
                <div className="card">
                    <div className="box">
                    <div>
                    <Image src={user} 
                    alt="GFG logo imported from public directory" />
                    </div>
                    </div>
                    <div className="effect effect-1"></div>
                </div>
            
                <div className="effect effect-1"></div>
                <div className="card">
                    <div className="box">
                    <Image src={user} 
                    alt="GFG logo imported from public directory" />
                    </div>
                    <div className="effect effect-1"></div>
                </div>
            </div>
            <br /><br />
            <div className="serv-content">
                <div className="card">
                    <div className="box">
                    <div>
                    <Image src={user} 
                    alt="GFG logo imported from public directory" />
                    </div>
                    </div>
                </div>
            <div className="effect effect-2"></div>
                <div className="card">
                    <div className="box">
                    <div>
                    <Image src={user} 
                    alt="GFG logo imported from public directory" />
                    </div>
                    </div>
                </div>
            <div className="effect effect-2"></div>
                <div className="card">
                    <div className="box">
                    <Image src={user} 
                    alt="GFG logo imported from public directory" />
                    </div>
                </div>
            </div>
        </div>
        <br /><br /><br /><br />
    </section>
    <section className="services" id="services">
  
     <div className="hello" style={{justifyContent:"center"}}>
      <br />
      <p style={{ fontSize:"20px", fontWeight:"bold",paddingLeft:"20%",color:"black"}}>
      OxyMutual is run entirely by its members. Only validotors can decide which claims are valid or not.  <br/>All member decisions are recorded and enforced by smart contracts on the Ethereum public blockchain.
      </p>
      </div>
      
    </section>
    
    </Content>
    <Footer className='footer'
      style={{
        marginTop:"188px",
        alignItems:'center',
        textAlign: 'center',
      }}    >
        <br />
       <br />
  
      <p>Oxyreium ©2022 Created by Us.</p>
    </Footer>
  </Layout>
);

export default Home;