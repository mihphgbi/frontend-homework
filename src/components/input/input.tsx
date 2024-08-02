import React from "react";
import { Input } from 'antd';

type InputProps = {
    placeholder?: string
    onChange?: () => void
}
const InputControl : React.FC<InputProps> = ({...props}) => {
    return(
        <>
            <div>
                <Input {...props} />
            </div>
        </>
    )
}
export default InputControl