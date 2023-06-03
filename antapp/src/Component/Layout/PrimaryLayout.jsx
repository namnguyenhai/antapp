import {
    MenuFoldOutlined,
    UserOutlined,
    HomeOutlined,
    MenuUnfoldOutlined,
    UsergroupAddOutlined,
    LineChartOutlined
} from '@ant-design/icons';
import styled  from "styled-components"
import { Helmet } from "react-helmet";
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from "react";
import {  NavLink, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const StyledPrimaryLayout = styled.div`
    background-color: #CAEAE6;
    height: 100vh;
    width: 100%;
    overflow: hidden;
`
export const PrimaryLayout = ({ tittle, children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    // const navigate = useNavigate();
    return <StyledPrimaryLayout>
        {/* <Helmet>
            <meta charSet="utf-8" />
            <title>{tittle}</title>

        </Helmet> */}
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
                            label: <NavLink to="/">Home</NavLink>,
                            component: 'a'
                        },
                        {
                            key: '2',
                            icon: <UserOutlined />,
                            label: <NavLink to="/user">User</NavLink>,
                            
                        },
                        {
                            key: '3',
                            icon: <UsergroupAddOutlined />,
                            label: <NavLink to="/customer">Customer</NavLink>,
                        },
                        {
                            key: '4',
                            icon: <LineChartOutlined />,
                            label: <NavLink to="/chart">Chart</NavLink>,
                        },
                    ]}
                />
            </Sider>
            
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
    </StyledPrimaryLayout>
}