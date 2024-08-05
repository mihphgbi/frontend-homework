import React from "react";
import {Input, InputProps} from 'antd';
import './input.style.scss';

interface InputControlProps extends InputProps{
    width?: string
    height?: string
    error?: boolean
}

const InputControl: React.FC<InputControlProps> = ({...props}) => {
    const {width = '100%', height = '2.25rem', error = false } = props;

    return (
        <>
            <Input style={{minWidth: '10rem', width: width, height: height}}
                   className={`bg-gray-color border-none text-dark-gray-color`}
                   {...props}
            />
        </>
    )
}
export default InputControl