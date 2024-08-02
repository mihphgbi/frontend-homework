import React, {useState} from "react";
import {Alert} from "antd";

type ToastAlertProps = {
    message: string,
    description: string,
    type?: 'success' | 'info' | 'warning' | 'error',
    showIcon?: boolean,
    open: boolean
}
const ToastAlert: React.FC<ToastAlertProps> = ({...props}) => {
    const {open} = props
    const [openToast, setOpen] = useState(open);
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <>
            <div className={'fixed top-10 right-3 max-w-80'}>
                {openToast && <Alert
                    {...props}
                    closable
                    afterClose={handleClose}
                />}
            </div>
        </>
    )
}
export default ToastAlert