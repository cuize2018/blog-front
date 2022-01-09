import React from "react";
import {Layout, Menu} from "antd";
import {AppstoreOutlined, MailOutlined, SettingOutlined, BugOutlined, WeiboOutlined} from '@ant-design/icons';
import axios from "axios";
import '../config/config.js';

const {Header, Footer, Sider, Content} = Layout;
const {SubMenu} = Menu;

class FirstPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: true,
            menuThem: "light",
            openKeys: [],
            blogs:[],
        };
    }

    componentDidMount() {
        //查询所有的博客文章
        //使用List组件
        let path = global.AppConfig.serverIP + "/blogs";
        const axios = require('axios');
        axios.post(path, {
            idUser: "1",
        }).then(function (response) {
            console.log(response);
            let blogs = response.data;



        }).catch(function (error) {
            console.log(error);
        });
    }

    onCollapse() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    /**
     * SubMenu 展开/关闭的回调
     * @param keys 选中某一菜单的key
     */
    onOpenChange(keys) {
        const latestOpenKey = keys.find(key => this.state.openKeys.indexOf(key) === -1);
        this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            }
        );
    }

    handleClick(item){
        let m = 0;
    }

    render() {
        return (
            <Layout>
                <Sider collapsible={true} collapsed={this.state.collapse} onCollapse={this.onCollapse.bind(this)}>
                    {/*<div className={"logo"}>*/}
                    {/*</div>*/}
                    {/*<Menu mode="inline" openKeys={this.state.openKeys} onOpenChange={this.onOpenChange.bind(this)}*/}
                    {/*      theme={this.state.menuThem}>*/}
                    {/*    <SubMenu key="ProgramLanguage" icon={<BugOutlined/>} title="编程语言">*/}
                    {/*        <Menu.Item key="1">Option 1</Menu.Item>*/}
                    {/*        <Menu.Item key="2">Option 2</Menu.Item>*/}
                    {/*        <Menu.Item key="3">Option 3</Menu.Item>*/}
                    {/*        <Menu.Item key="4">Option 4</Menu.Item>*/}
                    {/*    </SubMenu>*/}
                    {/*    <SubMenu key="DeepLearning" icon={<AppstoreOutlined/>} title="深度学习">*/}
                    {/*        <Menu.Item key="5">Option 5</Menu.Item>*/}
                    {/*        <Menu.Item key="6">Option 6</Menu.Item>*/}
                    {/*        <SubMenu key="sub3" title="Submenu">*/}
                    {/*            <Menu.Item key="7">Option 7</Menu.Item>*/}
                    {/*            <Menu.Item key="8">Option 8</Menu.Item>*/}
                    {/*        </SubMenu>*/}
                    {/*    </SubMenu>*/}
                    {/*    <SubMenu key="Daily" icon={<WeiboOutlined/>} title="日常娱乐">*/}
                    {/*        <Menu.Item key="9">Option 9</Menu.Item>*/}
                    {/*        <Menu.Item key="10">Option 10</Menu.Item>*/}
                    {/*        <Menu.Item key="11">Option 11</Menu.Item>*/}
                    {/*        <Menu.Item key="12">Option 12</Menu.Item>*/}
                    {/*    </SubMenu>*/}
                    {/*</Menu>*/}
                </Sider>
                <Layout>
                    <Header>
                        <Menu onClick={this.handleClick.bind(this)}  mode="horizontal" className={"first-page-menu"}>
                            <Menu.Item key="ProgramLanguage" icon={<MailOutlined />}>
                                编程语言
                            </Menu.Item>
                            <Menu.Item key="DeepLearning" icon={<AppstoreOutlined />}>
                                深度学习
                            </Menu.Item>
                            <Menu.Item key="Daily" icon={<WeiboOutlined />}>
                                日常娱乐
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default FirstPage;

