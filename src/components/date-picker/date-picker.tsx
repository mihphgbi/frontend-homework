import React from "react";
import {DatePicker} from 'antd';
import './date-picker.style.scss.css';

interface DatePickerProps {
    placeholder?: string
    onChange?: () => void
    disabled?: boolean
    width?: string
    height?: string

}

const DatePickerControl: React.FC<DatePickerProps> = ({...props}) => {
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