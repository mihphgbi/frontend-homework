import React from "react";
import {Input, InputProps} from 'antd';
import './input.style.scss';

interface InputControlProps extends InputProps {
    width?: string
    minWidth?: string
    height?: string
    bgColor?: string
}

const InputControl: React.FC<InputControlProps> = ({...props}) => {
    const {minWidth = '10rem', width = '100%', height = '2.25rem', bgColor = 'var(--gray-color)'} = props;

    return (
        <>
            <Input style={{minWidth, width, height, backgroundColor: bgColor}}
                   className={`border-none`}
                   {...props}
            />
        </>
    )
}
export default InputControl