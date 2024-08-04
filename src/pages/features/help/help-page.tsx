import React, {useEffect} from "react";
import ComingSoonPage from "../../system-pages/coming-soon/comming-soon";
import {useDispatch} from "react-redux";
import {activeMenu} from "../../../redux/slice/layoutSlice";
import {MENU_ITEM} from "../../../constants/menu/menu-item.constant";

type HelpIndexProps = {

}
const HelpIndexPage : React.FC<HelpIndexProps> = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(activeMenu(MENU_ITEM.HELP))
    },[dispatch])
    return(
        <>
            <ComingSoonPage/>
        </>
    )
}
export default HelpIndexPage