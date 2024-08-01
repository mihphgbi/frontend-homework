import Header from "../components/header/header";
import React, {FC, ReactElement, ReactNode} from "react";
import Footer from "../components/footer/footer";
import SideBarLeftMenu from "../components/side-bar-left-menu/side-bar-left-menu";
import {Layout} from "antd";
import {Content} from "antd/lib/layout/layout";


interface LayoutProps {
    children: ReactNode;
    title: string
}

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    color: 'var(--dark-blue-color)',
    backgroundColor: 'var(--gray-color)',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px'
};

const siderStyle: React.CSSProperties = {
    color: 'var(--white-color)',
    minHeight: '100vh',
    border:'none',
    backgroundColor: 'var(--white-color)',

};

const MainLayout: FC<LayoutProps> = ({children, title}): ReactElement => {
    return (
        <div style={{minHeight: '100vh', minWidth: '100%'}}>
            <Layout style={{flexDirection: 'row'}}>
                <SideBarLeftMenu style={siderStyle}/>
                <Layout style={{flexDirection:'column', backgroundColor: 'var(--white-color)'}}>
                    <Header title={title}/>
                    <Content style={contentStyle}>
                        {children}
                    </Content>
                    <Footer/>
                </Layout>
            </Layout>
        </div>
    );
};

export default MainLayout;
