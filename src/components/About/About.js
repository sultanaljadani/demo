import React , { useContext } from 'react'
import {DataContext} from '../DataProvider'
import {Card, Avatar} from 'antd'
import { CodeSandboxOutlined, GithubOutlined, TwitterCircleFilled } from '@ant-design/icons';
export default function About() {
    const value1 = useContext(DataContext)
    const [about] = value1.about
    const { Meta } = Card;
    const gridStyle = {
        width: '25%',
        textAlign: 'center',
        padding: '30px',
        margin: '10px'
      };
    return (
        <>
        <div className="about">
            <h2 className="title-page">Team Awesome</h2>
            {
            about.map(about => (
                <Card key={about.__id}
                    style={gridStyle}
                    actions={[
                    <CodeSandboxOutlined key="setting" />,
                    <GithubOutlined key="edit" />,
                    <TwitterCircleFilled key="ellipsis" />,
                    ]}>
                    <Meta
                    avatar={<Avatar size={64} src={about.image[0]} />}
                    title={about.name}
                    description={about.position}/>
                </Card>
                ))
            }
        </div>
        </>

    )
}