import React, {PropsWithChildren, useState} from 'react';
import {DesktopOutlined, PieChartOutlined, UserOutlined,} from '@ant-design/icons';
import {Breadcrumb, Layout, Menu, MenuProps, theme} from 'antd';
import {Route, Routes, useNavigate} from "react-router-dom";
import TextContent from "./TextContent.tsx";

const {Content, Footer, Sider} = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '/admin/key1', <PieChartOutlined/>),
    getItem('Option 2', '/admin/key2', <DesktopOutlined/>),
    getItem('User', 'sub1', <UserOutlined/>, [
        getItem('Tom', '/admin/key3'),
        getItem('Bill', '/admin/key4'),
        getItem('Alex', '/admin/key5'),
    ]),
    // getItem('Team', 'sub2', <TeamOutlined/>, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    // getItem('Files', '9', <FileOutlined/>),
];


function Body(
    props: PropsWithChildren
) {

    const navigate = useNavigate()

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (
        <Layout style={{height: '100vh', width: '100%'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical"/>
                <Menu theme="dark" defaultSelectedKeys={['/admin/key1']} mode="inline" items={items}
                      onClick={(event) => {
                          if (event.key.startsWith('/')) {
                              navigate(event.key)
                          }
                      }}/>
            </Sider>
            <Layout>

                <Content style={{margin: '0 16px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >

                        {props.children}

                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    )
}


function App() {
    return (<Body>
        <Routes>
            <Route path={'/admin/key1'} element={<TextContent text='1'/>}/>
            <Route path={'/admin/key2'} element={<div>222</div>}/>
            <Route path={'/admin/key3'} element={<div>333</div>}/>
            <Route path={'/admin/key4'} element={<div>444</div>}/>
            <Route path={'/admin/key5'} element={<div>555</div>}/>
        </Routes>
    </Body>)

}

export default App;


