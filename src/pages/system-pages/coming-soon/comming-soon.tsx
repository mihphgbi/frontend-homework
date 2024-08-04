import React, {FC, ReactElement} from 'react';
import {Flex, Typography} from "antd";

const ComingSoonPage: FC = (): ReactElement => {
    return (
        <Flex gap={'middle'} className={'bg-white-color rounded-2xl p-52 align-middle'}>
            <Typography className={'text-dark-blue-color font-medium text-3xl text-center w-[100%]'}>Coming soon</Typography>
        </Flex>
    );
};

export default ComingSoonPage;
