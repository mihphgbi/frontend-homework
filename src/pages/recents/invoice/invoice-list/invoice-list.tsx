import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {activeMenu} from "../../../../redux/slice/layoutSlice";
import {MENU_ITEM} from "../../../../constants/menu/menu-item.constant";

type InvoiceListProps = {

}
const InvoiceListPage : React.FC<InvoiceListProps> = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(activeMenu(MENU_ITEM.INVOICE_LIST))
    },[dispatch])
    return(
        <>
            invoice list
        </>
    )
}
export default InvoiceListPage