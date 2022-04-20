import styles from './index.less';
import {Layout, Menu, Row, Col, Breadcrumb, Form, Button, Input, Modal} from 'antd';
import {Link} from "umi";
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import React, {useState} from "react";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
import { UserOutlined, EditOutlined,AreaChartOutlined,UnorderedListOutlined,StockOutlined,InfoCircleOutlined,LaptopOutlined, SearchOutlined,FileOutlined,NotificationOutlined } from '@ant-design/icons';

export default function IndexPage(props:any) {
  return <div style={{background:"yellow"}} >
    <Layout>
      <Layout>
        <Sider width={200}  style={{height:"660px"}} className="site-layout-background">
          <div style={ { paddingTop:"10px",fontSize:'18px',width:200,height:50,backgroundColor: 'blue',color: 'white'} }>
            农业数字管理系统
          </div>
          <Menu theme="dark" mode="inline"  defaultSelectedKeys={['1']} defaultOpenKeys={['plant']}
                style={{ height: '100%', borderRight: 0 }}>
            {/*     <SubMenu key="user" icon={<UserOutlined />} title="用户">
            <Menu.Item key="userManager"><Link to="/indexAdmin/userManager">用户管理</Link></Menu.Item>
            </SubMenu>*/}
            <SubMenu key="iot" icon={<UserOutlined />} title="农业大数据">
              <SubMenu key="map1" icon={<UserOutlined />} title="map">
                <Menu.Item key="map1" icon={<EditOutlined />}><Link to="/map1">map1</Link></Menu.Item>
                <Menu.Item key="mapchart1" icon={<EditOutlined />}><Link to="/mapchart1">map1</Link></Menu.Item>

                <Menu.Item key="three2" icon={<EditOutlined />}><Link to="/three2">three2</Link></Menu.Item>
                <Menu.Item key="three3" icon={<EditOutlined />}><Link to="/three3">three3</Link></Menu.Item>
                <Menu.Item key="three5" icon={<EditOutlined />}><Link to="/three5">three5</Link></Menu.Item>
                <Menu.Item key="font1" icon={<EditOutlined />}><Link to="/font1">font1</Link></Menu.Item>
                <Menu.Item key="ThreeBim" icon={<EditOutlined />}><Link to="/ThreeBim">ThreeBim</Link></Menu.Item>
                <Menu.Item key="ThreeBim2" icon={<EditOutlined />}><Link to="/ThreeBim2">ThreeBim2</Link></Menu.Item>
                <Menu.Item key="ThreeBim3" icon={<EditOutlined />}><Link to="/ThreeBim3">ThreeBim3</Link></Menu.Item>
                <Menu.Item key="ThreeBim4" icon={<EditOutlined />}><Link to="/ThreeBim4">ThreeBim4</Link></Menu.Item>
                <Menu.Item key="ThreeBim6" icon={<EditOutlined />}><Link to="/ThreeBim6">ThreeBim6</Link></Menu.Item>
              </SubMenu>



            </SubMenu>

          </Menu>

        </Sider>
        <Layout style={{ padding: '0 2px 2px' }}>
          <Content
            className="site-layout-background"
            style={{padding: 2,margin: 0, minHeight: 280,}}
          >
            {props.children}

          </Content>
        </Layout>
      </Layout>
    </Layout>

  </div>
}
