import React , { useContext } from 'react'
import {DataContext} from '../DataProvider'
import {Card, Col, Row , Avatar, Tag, PageHeader} from 'antd'
import './About.css'
import { CodeSandboxOutlined, GithubOutlined, TwitterCircleFilled } from '@ant-design/icons';
export default function About() {
    const value1 = useContext(DataContext)
    const [about] = value1.about
    const { Meta } = Card;
    const gridStyle = {
        textAlign: 'center',
        padding: '30px',
        margin: '10px',
        borderRadius: '10px', };
    return (
        <>
            <div className="about">
            <PageHeader
            className="site-page-header"
            onBack={() => window.history.back()}
            title="Back"
            subTitle="Who are we ? "
            tags={<Tag color="#41a098">About us</Tag>} />
                <h2 className="title-page">Team Awesome</h2>
                    <Row align="middle" justify="space-around"  gutter="horizt">
                        {
                            about.map(about => (
                                <Col span={6} key={about.__id}>
                                    <Card key={about.__id}
                                        bordered={true}
                                        style={gridStyle}
                                        actions={[
                                            <CodeSandboxOutlined key="codesandbox" href=''/>,
                                            <GithubOutlined key="github" />,
                                            <TwitterCircleFilled key="twitter" title={about.twitter_account}  />,
                                            ]}>
                                            <Meta
                                                avatar={<Avatar size={64} src={about.image[0]} />}
                                                title={about.name}
                                                description={about.position}/>
                                    </Card>
                                </Col>
                                ))
                        }
                    </Row>
            </div>
        </>
    )
}