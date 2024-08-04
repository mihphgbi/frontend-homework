import React from "react";
import {Button} from "antd";

type GradientButtonProps = {
    text: string,
    onClick: () => void,
    style?: any,
    className?: any
    disabled?: boolean
}
const GradientButtonControl: React.FC<GradientButtonProps> = ({...props}) => {
    const {text, disabled = false, onClick} = props
    return (
        <>
            <Button disabled={disabled}
                    onClick={onClick}
                    className={'font-medium text-white-color w-[6rem] border-none bg-gradient-to-r from-blue-color to-dark-blue-color'}
            >
                {text}
            </Button>
        </>
    )
}
export default GradientButtonControl