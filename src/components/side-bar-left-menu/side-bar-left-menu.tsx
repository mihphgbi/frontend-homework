import React from "react";
import {Menu, MenuProps} from "antd";
import Sider from "antd/lib/layout/Sider";

type SideBarLeftMenuProps = {
    style: any
};

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
    getItem('Home', 'home', null),
    getItem('Invoices', 'invoices', null, [
        getItem('Create new', 'create-invoice'),
        getItem('Edit', 'edit-invoice'),
    ]),
    getItem('Contractors', 'contractors',null),
    getItem('Products and Services', 'services',null),
];
const SideBarLeftMenu: React.FC<SideBarLeftMenuProps> = ({style}) => {
    return (
        <>
            <Sider width={'15%'} style={style}>
                <div className="demo-logo-vertical"/>
                <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items}/>
            </Sider>
        </>
    )
}
export default SideBarLeftMenu