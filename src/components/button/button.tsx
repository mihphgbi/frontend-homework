import React from "react";
import {Button} from "antd";
import {ButtonProps} from "antd/es/button/button";
import './button.style.scss';

interface ButtonControlProps extends ButtonProps {
    text: string,
    disabled?: boolean,
    btnType?: 'gradient-btn' | 'outlined-btn' | 'no-outline-btn' | 'fill-btn'
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
        btnType = 'outlined-btn',
        minWidth = '5rem',
        style
    } = props
    return (
        <>
            <Button {...props}
                   disabled={disabled}
                   className={`${btnType} font-medium`}
                   style={{
                       backgroundColor: btnType === 'fill-btn' ? bgFillBtn : '',
                       color: btnType === 'fill-btn' ? textColor : '',
                       minWidth: minWidth,
                       ...style
                   }}
            >
                    {text}
            </Button>
        </>
    )
}
export default ButtonControl