import Header from "../components/header/header";
import React, {FC, ReactElement, ReactNode} from "react";
import Footer from "../components/footer/footer";
import SideBarLeftMenu from "../components/side-bar-left-menu/side-bar-left-menu";
import {Layout} from "antd";
import {Content} from "antd/lib/layout/layout";
import {useSelector} from "react-redux";
import ToastAlert from "../components/toast/toast";

interface LayoutProps {
    children: ReactNode;
    title: string
}

const MainLayout: FC<LayoutProps> = ({children, title}): ReactElement => {
    const {alertStatus, isOpenAlert, msgAlert} = useSelector((state: any) => state.layout)

    return (
        <div className={'min-h-[100vh] min-w-[100%]'}>
            <Layout className={'flex-row'}>
                <SideBarLeftMenu/>
                <Layout className={'flex-col bg-white-color'}>
                    <Header title={title}/>
                    <Content className={'text-dark-blue-color bg-gray-color rounded-t-3xl p-8 '}>
                        {children}
                    </Content>
                    <Footer/>
                </Layout>
            </Layout>
            {
                isOpenAlert &&
                <ToastAlert  open={isOpenAlert} type={alertStatus} message={msgAlert} showIcon></ToastAlert>
            }
        </div>
    );
};

export default MainLayout;
