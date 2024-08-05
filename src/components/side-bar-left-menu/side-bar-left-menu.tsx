import React, {useEffect, useState} from "react";
import {Flex, Menu, MenuProps} from "antd";
import Sider from "antd/lib/layout/Sider";
import {
    DatabaseFilled,
    FileAddFilled,
    FileTextFilled,
    HomeFilled, InfoCircleFilled, SettingFilled, SignalFilled,
    TeamOutlined,
    UserOutlined
} from "@ant-design/icons";
import './side-bar-left-menu.style.scss'
import {useSelector} from "react-redux";
import {MAIN_MENU_ITEM, MENU_ITEM} from "../../constants/menu/menu-item.constant";

type SideBarLeftMenuProps = {};
type LabelLinkProps = {
    title: string
    href: string
};

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: string
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type
    } as MenuItem;
}

const LabelLink: React.FC<LabelLinkProps> = ({title, href}) => {
    return (
        <a href={href}>{title}</a>
    )
}

const menuItems: MenuItem[] = [
    getItem('Recent', MAIN_MENU_ITEM.RECENT, null, [
        getItem(<LabelLink title={'Home'} href={'/'}/>, MENU_ITEM.HOME, <HomeFilled/>),
        getItem('Invoices', MAIN_MENU_ITEM.INVOICES, <FileTextFilled/>, [
            getItem(<LabelLink title={'Invoice list'} href={'/invoice'}/>, MENU_ITEM.INVOICE_LIST, <FileAddFilled/>),
            getItem(<LabelLink title={'Create new'} href={'/create-invoice'}/>, MENU_ITEM.CREATE_INVOICE,
                <FileAddFilled/>),
            getItem(<LabelLink title={'Edit'} href={'/edit-invoice'}/>, MENU_ITEM.EDIT_INVOICE, <FileAddFilled/>),
        ]),
        getItem(<LabelLink title={'Contractors'} href={'/contractors'}/>, MENU_ITEM.CONTRACTORS, <UserOutlined/>),
        getItem(<LabelLink title={'Products and Services'} href={'/products-and-services'}/>, MENU_ITEM.SERVICES,
            <DatabaseFilled/>),
    ], 'group'),
    getItem('Other', MAIN_MENU_ITEM.OTHER, null, [
        getItem(<LabelLink title={'Users'} href={'/users'}/>, MENU_ITEM.USERS, <TeamOutlined/>),
        getItem(<LabelLink title={'Statistics'} href={'/statistics'}/>, MENU_ITEM.STATISTICS, <SignalFilled/>),
    ], 'group'),
    getItem('', MAIN_MENU_ITEM.FEATURES, null, [
        getItem(<LabelLink title={'Settings'} href={'/setting'}/>, MENU_ITEM.SETTINGS, <SettingFilled/>),
        getItem(<LabelLink title={'Help'} href={'/help'}/>, MENU_ITEM.HELP, <InfoCircleFilled/>),
    ], 'group'),
];

const siderStyle: React.CSSProperties = {
    color: 'var(--white-color)',
    minHeight: '100vh',
    border: 'none',
    backgroundColor: 'var(--white-color)',
    padding: '0 1rem'
};

const SideBarLeftMenu: React.FC<SideBarLeftMenuProps> = () => {
    const activeItemMenu = useSelector((state: any) => state.layout.activeItemMenu);

    const [selectedKey, setSelectedKey] = useState('');

    useEffect(() => {
        setSelectedKey(activeItemMenu);
    }, [activeItemMenu])

    const handleChangeKey = (value: any) => {
        setSelectedKey(value.key);
    }
    return (
        <>
            <Sider width={'18%'} style={siderStyle}>
                <Flex gap={'middle'} className={'text-xl font-bold text-[--dark-blue-color] my-8 mx-2'}>
                    <HomeFilled/>
                    <p className={'bg-gradient-to-tr from-blue-color to-dark-blue-color bg-clip-text text-fill-transparent'}>
                        Microinvoice
                    </p>
                </Flex>
                <Flex gap={"middle"} vertical justify={'space-between'} className={'custom-menu'}>
                    <Menu
                        style={{
                            borderInlineEnd: 'none',
                            backgroundColor: 'var(--white-color)',
                        }}
                        theme="light"
                        selectedKeys={[selectedKey]}
                        defaultOpenKeys={[MAIN_MENU_ITEM.INVOICES]}
                        mode="inline"
                        items={menuItems}
                        onClick={handleChangeKey}
                    />
                </Flex>
            </Sider>
        </>
    )
}
export default SideBarLeftMenu