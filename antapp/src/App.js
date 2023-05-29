import {
  MenuFoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Col, Row, Statistic } from 'antd';
import { useState } from 'react';
const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
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
              icon: <UserOutlined />,
              label: 'nav 1',
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
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="Active Users" value={112893} />
            </Col>
            <Col span={12}>
              <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
              <Button
                style={{
                  marginTop: 16,
                }}
                type="primary"
              >
                Recharge
              </Button>
            </Col>
            <Col span={12}>
              <Statistic title="Active Users" value={112893} loading />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
