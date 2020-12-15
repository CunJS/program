import React from 'react'
import {withRouter} from 'react-router-dom';
import { Layout, Menu, Breadcrumb} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import logo from './logo.png';
import {adminRoutes} from '../../routes';
import { renderIntoDocument } from 'react-dom/test-utils';


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function index(props) {
    return (
        <Layout>
    <Header className="header" style={{
        backgroundColor:"#ffffff"
    }}>
      <div className="logo">
          <img src={logo} alt="logo" />
      </div>
      
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
         {adminRoutes.map(
           route=>{
             return<Menu.Item key={route.path} 
             onClick={p => props.histroy.push(p.key)}>
            
               {route.title}
               </Menu.Item>;
         })} 
          
        </Menu>
      </Sider>
      <Layout style={{ padding: '16px ' }}>
        
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
    )
}

export default withRouter(index);
