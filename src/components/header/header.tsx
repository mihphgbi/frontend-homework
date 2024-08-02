import React from "react";
import {BellFilled, SearchOutlined, UserOutlined} from "@ant-design/icons";
import {Avatar, Badge, Flex} from "antd";

type HeaderProps = {
    title: string
}

const Header: React.FC<HeaderProps> = ({title}) => {
    return (
        <>
            <Flex gap={'middle'} className={'min-h-[6rem] bg-[--white-color] text-[--dark-blue-color]'} align={'center'} justify={'space-between'}>
                <Flex gap={'middle'}>
                    <p className={'text-3xl font-bold'}>{title}</p>
                </Flex>
                <Flex gap={'2rem'} justify={'space-between'} align={'center'} className={'pr-8'}>
                    <Flex gap={'1rem'} justify={'space-between'}>
                        <SearchOutlined className={'text-lg bg-[--gray-color] p-1.5 rounded-md'}/>
                        <Badge count={5}>
                            <BellFilled
                                className={'text-lg bg-[--gray-color] p-1.5 rounded-md text-[--dark-blue-color]'}/>
                        </Badge>

                    </Flex>
                    <Flex>
                        <Avatar size="large" className={'bg-[--gray-color]'}
                                icon={<UserOutlined className={'text-lg p-1.5 text-[--dark-blue-color]'}/>}/>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}
export default Header