// import React  from 'react'
// import {Card, Col, Row , Avatar, Tag, PageHeader} from 'antd'
// import { connect } from "react-redux";
// import './About.css'
// import { CodeSandboxOutlined, GithubOutlined, TwitterCircleFilled, InstagramOutlined } from '@ant-design/icons';
// import styled from 'styled-components'
// function About() {
//     const { Meta } = Card;
//     const gridStyle = {
//         textAlign: 'center',
//         padding: '30px',
//         margin: '10px',
//         borderRadius: '10px', };
//     const AboutHeader = styled.h2`
//         color:#165eb1; `;
//     const About = ({ about }) => {
//     return (
//         <>
//             <div className="about">
//             <PageHeader
//             className="site-page-header"
//             onBack={() => window.history.back()}
//             title="Back"
//             subTitle="Who are we ? "
//             tags={<Tag color="#41a098">About us</Tag>} />
//                 <AboutHeader className="title-page">Team Awesome</AboutHeader>
//                     <Row align="middle" justify="space-around"  gutter="horizt">
//                         {
//                             about.map(about => (
//                                 <Col span={6} key={about.__id}>
//                                     <Card key={about.__id}
//                                         bordered={true}
//                                         style={gridStyle}
//                                         actions={[
//                                             <CodeSandboxOutlined key="codesandbox" href='' title={about.code_account}/>,
//                                             <InstagramOutlined key="instagram" href='' title={about.instagram_account}/>,
//                                             <GithubOutlined key="github" title={about.github_account}/>,
//                                             <TwitterCircleFilled key="twitter" title={about.twitter_account}  />,
//                                             ]}>
//                                             <Meta
//                                                 avatar={<Avatar size={74} src={about.image[0]} />}
//                                                 title={about.name}
//                                                 description={about.position}/>
//                                     </Card>
//                                 </Col>
//                                 ))
//                         }
//                     </Row>
//             </div>
//         </>
//     )
//     };
// }

// const mapState = (state) => {
//     return {
//         about: state.shop.about,
//     };
//   };
  
//   export default connect(mapState)(About);