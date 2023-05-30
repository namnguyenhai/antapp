import { styled } from "styled-components"
import { Helmet } from "react-helmet";
import {
    MenuFoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    HomeOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const StyledPrimaryLayout = styled.div`
    background-color: #CAEAE6;
    height: 100vh;
    /* overflow: hidden; */
`
export const PrimaryLayout = ({ tittle, children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return <StyledPrimaryLayout>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{tittle}</title>

        </Helmet>
        <Layout style={{height:"100vh"}}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                   
                    items={[
                        {
                            key: '1',
                            
                            icon: <HomeOutlined />,
                            label:  <Link to="/">Home</Link>,
                            
                        },
                        {
                            key: '2',
                            
                            icon: <UserOutlined />,
                            label: <Link to="/user">User</Link>,
                            
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        // minHeight: 280,
                        height: "100vh",
                        background: colorBgContainer,
                        overflowY: "scroll",
                        overflowX: "hidden"
                    }}
                    
                >
                    {children}

                </Content>
            </Layout>
        </Layout>
    </StyledPrimaryLayout>
}