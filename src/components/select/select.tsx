import React from "react";
import {Select} from 'antd';
import {LabeledValue} from "antd/es/select";
import './select.style.scss';

type SelectProps = {
    placeholder?: string
    options: Array<{ value: string | number, label: string | number }>
    onChange?: () => void
    disable?: boolean
    autoFocus?: boolean
    defaultValue?: string | string[] | number | number[] | LabeledValue | LabeledValue[]
    width?: string
}
const SelectControl: React.FC<SelectProps> = ({...props}) => {
    const {width = '20rem'} = props;

    return (
        <>
            <Select style={{minWidth: '10rem', width: width, background: 'var(--gray-color)'}}
                    className={`bg-gray-color`}
                    {...props}
            />
        </>
    )
}
export default SelectControl