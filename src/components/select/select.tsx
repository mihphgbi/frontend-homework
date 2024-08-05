import React from "react";
import {Select,SelectProps} from 'antd';
import './select.style.scss';

interface SelectControlProps extends SelectProps{
    width?: string
    minWidth?: string
    height?: string
}
const SelectControl: React.FC<SelectControlProps> = ({...props}) => {
    const {width = '100%',minWidth = '10rem', height='2.125rem'} = props;

    return (
        <>
            <Select style={{minWidth,width,height}}
                    className={`bg-gray-color`}
                    {...props}
            />
        </>
    )
}
export default SelectControl