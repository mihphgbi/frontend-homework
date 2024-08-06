import React from "react";
import {Button} from "antd";
import {ButtonProps} from "antd/es/button/button";
import './button.style.scss';

interface ButtonControlProps extends ButtonProps {
    text: string,
    disabled?: boolean,
    btntype?: 'gradient-btn' | 'outlined-btn' | 'no-outline-btn' | 'fill-btn'
    bgFillBtn?: string
    textColor?: string
    minWidth?: string
    style?: any
}

const ButtonControl: React.FC<ButtonControlProps> = ({...props}) => {
    const {
        text,
        disabled = false,
        bgFillBtn = 'var(--gray-color)',
        textColor = 'var(--dark-blue-color)',
        btntype = 'outlined-btn',
        minWidth = '5rem',
        style
    } = props
    return (
        <>
            <Button {...props}
                   disabled={disabled}
                   className={`${btntype} font-medium`}
                   style={{
                       backgroundColor: btntype === 'fill-btn' ? bgFillBtn : '',
                       color: btntype === 'fill-btn' ? textColor : '',
                       minwidth: minWidth,
                       ...style
                   }}
            >
                    {text}
            </Button>
        </>
    )
}
export default ButtonControl