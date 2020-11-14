import React from 'react'
import { PageHeader, Form, Input, Button , Select, Tag} from 'antd';
export default function Contact() {
    const { Option } = Select;
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 8,
        },
      };
      const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select
            style={{
              width: 80,
            }}>
            <Option value="966">+966</Option>
            {/* you can add more option here like key countries +___ */}
          </Select>
        </Form.Item>
      );
      const onFinish = (values) => {
        console.log(values);
      };
    return (
        <>
        <PageHeader
            className="site-page-header"
            onBack={() => window.history.back()}
            title="Back"
            subTitle="Contact Form"
            tags={<Tag color="#97d068">Contact</Tag>} />
            <Form {...layout} name="nest-messages" onFinish={onFinish} >
                <Form.Item
                    name={['user', 'name']}
                    label="Full Name"
                    rules={[
                    {
                        required: true,
                    },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'email']}
                    label="Email"
                    rules={[
                    {
                        type: 'email',
                        required: true,
                    },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Phone Number">
                    <Input
                    addonBefore={prefixSelector}
                    style={{
                        width: '40%',
                    }}
                    />
                </Form.Item>
                <Form.Item 
                    name={['user', 'Message']} 
                    label="Message"
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
} 