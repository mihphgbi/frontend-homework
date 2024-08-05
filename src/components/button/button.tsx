import React from "react";
import {Button} from "antd";
import {ButtonProps} from "antd/es/button/button";
import './button.style.scss';

interface ButtonControlProps extends ButtonProps{
    text: string,
    disabled?: boolean,
    btnType?: 'gradient-btn' | 'outlined-btn' | 'no-outline-btn'
}
const ButtonControl: React.FC<ButtonControlProps> = ({...props}) => {
    const {text, disabled = false, btnType='outlined-btn'} = props
    return (
        <>
            <Button disabled={disabled}
                    className={`${btnType} font-medium`}
                    {...props}
            >
                {text}
            </Button>
        </>
    )
}
export default ButtonControl