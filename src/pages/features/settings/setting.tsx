import React, {useEffect} from "react";
import ComingSoonPage from "../../system-pages/coming-soon/comming-soon";
import {useDispatch} from "react-redux";
import {activeMenu} from "../../../redux/slice/layoutSlice";
import {MENU_ITEM} from "../../../constants/menu/menu-item.constant";

type SettingIndexProps = {

}
const SettingIndexPage : React.FC<SettingIndexProps> = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(activeMenu(MENU_ITEM.SETTINGS))
    },[dispatch])
    return(
        <>
            <ComingSoonPage/>
        </>
    )
}
export default SettingIndexPage