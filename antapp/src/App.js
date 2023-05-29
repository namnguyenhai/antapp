import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesStacked } from '@fortawesome/free-solid-svg-icons'


import React from 'react';
import {
  MenuFoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Col, Row, Statistic } from 'antd';
import { useState } from 'react';
import { Line } from '@ant-design/charts';


const { Header, Sider, Content } = Layout;



const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const myData = [
    { x: 0, y: 0 },
    { x: 1, y: 2 },
    { x: 2, y: 4 },
    { x: 3, y: 11 },
    { x: 4, y: 9 },
    { x: 5, y: 14 },
    { x: 6, y: 19 },
    { x: 7, y: 17 },
    { x: 8, y: 22 },
    { x: 9, y: 24 },
    { x: 10, y: 23 },
    { x: 11, y: 27 },
    { x: 12, y: 32 },
    { x: 13, y: 30 },
    { x: 14, y: 35 },
    { x: 15, y: 37 },
    { x: 16, y: 40 },
  ];



  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              
              icon: <HomeOutlined />,
              label: 'Home',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
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
          }}
        >
          <Row gutter={16} justify={"center"}>
            <Col span={12} align="middle" >
              <Statistic title="Active Users" value={112893} prefix={<UserOutlined></UserOutlined>} />
            </Col>
            <Col span={12} align="middle" >
              <Statistic title="Number of Products" value={112893} prefix={<FontAwesomeIcon icon={faBoxesStacked} />} />
            </Col>
            <Col span={24}>
              <Line
                data={myData}
                height={500}
                xField="x"
                yField="y"
                point={{ size: 5, shape: 'diamon' }}
                color='blue'
              />
            </Col>
          </Row>

        </Content>
      </Layout>
    </Layout>
  );
};


export default App;