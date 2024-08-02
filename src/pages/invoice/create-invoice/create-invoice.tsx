import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {activeMenu} from "../../../redux/slice/layoutSlice";
import {MENU_ITEM} from "../../../constants/menu/menu-item.constant";
import {Flex} from "antd";
import InputControl from "../../../components/input/input";
import SelectControl from "../../../components/select/select";

type CreateInvoiceProps = {}
const CreateInvoice: React.FC<CreateInvoiceProps> = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(activeMenu(MENU_ITEM.INVOICE))
    }, [dispatch])

    return (
        <>
            <Flex className={'w-[100%]'} gap={'1rem'} justify={'space-between'} vertical>
                <Flex vertical gap={'middle'} className={'bg-white-color rounded-lg p-8'}>
                    <Flex gap={'middle'} justify={'space-between'}>
                        <InputControl placeholder={'Document Number'}/>
                        <SelectControl defaultValue={1} options={[{value: 1, label: 1},{value: 2, label: 2}]}/>
                        <SelectControl defaultValue={1} options={[{value: 1, label: 1},{value: 2, label: 2}]}/>
                    </Flex>
                    <Flex gap={'middle'} justify={'space-between'}>
                        <SelectControl defaultValue={1} options={[{value: 1, label: 1},{value: 2, label: 2}]}/>
                        <SelectControl defaultValue={1} options={[{value: 1, label: 1},{value: 2, label: 2}]}/>
                        <SelectControl defaultValue={1} options={[{value: 1, label: 1},{value: 2, label: 2}]}/>
                    </Flex>
                </Flex>
                <Flex gap={'middle'} className={'w-[100%] h-[5rem] bg-white-color rounded-lg'}>
                    <p>Line items</p>
                </Flex>
            </Flex>
        </>
    )
}
export default CreateInvoice