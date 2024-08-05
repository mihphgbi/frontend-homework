import React from "react";
import {DatePicker, DatePickerProps} from 'antd';
import './date-picker.style.scss.css';

interface DatePickerControlProps extends DatePickerProps {
    placeholder?: string
    onChange?: () => void
    disabled?: boolean
    width?: string
    height?: string
}

const DatePickerControl: React.FC<DatePickerControlProps> = ({...props}) => {
    const {width = '100%', height = '2.25rem'} = props;

    return (
        <>
            <DatePicker style={{minWidth: '10rem', width: width, height: height}}
                        className={`bg-gray-color border-none`}
                        {...props}
            />
        </>
    )
}
export default DatePickerControl