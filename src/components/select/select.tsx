import React from "react";
import {Select,SelectProps} from 'antd';
import './select.style.scss';

interface SelectControlProps extends SelectProps{
    width?: string
    height?: string
}
const SelectControl: React.FC<SelectControlProps> = ({...props}) => {
    const {width = '100%', height='2.125rem'} = props;

    return (
        <>
            <Select style={{minWidth: '10rem', width: width, height:height}}
                    className={`bg-gray-color`}
                    {...props}
            />
        </>
    )
}
export default SelectControl