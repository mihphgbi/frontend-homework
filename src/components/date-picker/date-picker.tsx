import React from "react";
import {DatePicker} from 'antd';

interface DatePickerProps {
    placeholder?: string
    onChange?: () => void
    disabled?: boolean
    width?: string

}

const DatePickerControl: React.FC<DatePickerProps> = ({...props}) => {
    const {width = '20rem'} = props;

    return (
        <>
            <DatePicker style={{minWidth: '10rem', width: width}}
                   className={`bg-gray-color border-none`}
                   {...props}
            />
        </>
    )
}
export default DatePickerControl