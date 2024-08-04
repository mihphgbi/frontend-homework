import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {activeMenu} from "../../../redux/slice/layoutSlice";
import {MENU_ITEM} from "../../../constants/menu/menu-item.constant";
import ComingSoonPage from "../../system-pages/coming-soon/comming-soon";

type HomePageProps = {

}
const HomePage: React.FC<HomePageProps> = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(activeMenu(MENU_ITEM.HOME))
    },[dispatch])

    return(
        <>
            <ComingSoonPage/>
        </>
    )
}
export default HomePage