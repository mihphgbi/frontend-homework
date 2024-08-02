import React from "react";
import { Select} from 'antd';
import {LabeledValue} from "antd/es/select";

type SelectProps = {
    placeholder?: string
    options: Array<{value: string | number, label: string | number}>
    onChange?: () => void
    disable?: boolean
    autoFocus?: boolean
    defaultValue: string | string[] | number | number[] | LabeledValue | LabeledValue[]
}
const SelectControl : React.FC<SelectProps> = ({...props}) => {
    return(
        <>
            <div>
                <Select {...props} />
            </div>
        </>
    )
}
export default SelectControl