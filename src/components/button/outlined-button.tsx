import React from "react";
import {Button} from "antd";

type OutlinedButtonProps = {
    text: string,
    onClick: () => void,
    style?: any,
    className?: any
    disabled?: boolean
}
const OutlinedButtonControl: React.FC<OutlinedButtonProps> = ({...props}) => {
    const {text, disabled = false, onClick} = props
    return (
        <>
            <Button disabled={disabled}
                    onClick={onClick}
                    className={'text-dark-blue-color font-medium min-w-[4rem] border-dark-blue-color border-2'}>
                {text}
            </Button>
        </>
    )
}
export default OutlinedButtonControl