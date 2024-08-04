import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {activeMenu, openWarningAlert} from "../../../../redux/slice/layoutSlice";
import {MENU_ITEM} from "../../../../constants/menu/menu-item.constant";
import {Button, Flex, Table, TableColumnsType} from "antd";
import InputControl from "../../../../components/input/input";
import SelectControl from "../../../../components/select/select";
import {PAYMENT_METHOD_LIST} from "../../../../constants/invoice/invoice.constant";
import {data} from "../../../../mock-data/invoice";
import DatePickerControl from "../../../../components/date-picker/date-picker";
import {ItemInvoiceModel} from "../../../../models/invoice/invoice.model";
import OutlinedButtonControl from "../../../../components/button/outlined-button";
import GradientButtonControl from "../../../../components/button/gradient-button";


export const columns: TableColumnsType<ItemInvoiceModel> = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
    },
    {
        title: 'Unit',
        dataIndex: 'unit',
    }, {
        title: 'Unit Price',
        dataIndex: 'unitPrice',
    }, {
        title: 'Calculated Price',
        dataIndex: 'calculatedPrice',
        render: (_, record) => (
            record.unitPrice * record.quantity
        )
    }
];

// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: ItemInvoiceModel[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: ItemInvoiceModel) => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};

type CreateInvoiceProps = {}
const CreateInvoice: React.FC<CreateInvoiceProps> = () => {
    const dispatch = useDispatch();
    const [listData, setListData] = useState(data)


    useEffect(() => {
        dispatch(activeMenu(MENU_ITEM.CREATE_INVOICE))
    }, [dispatch])

    const handleAddItem = () => {
        const newItem: ItemInvoiceModel = {
            key: '',
            name: '',
            quantity: 0,
            unit: '',
            unitPrice: 0,
        }
        // @ts-ignore
        setListData([...listData,newItem]);
    }

    return (

        <div className={'relative min-h-[100%] pb-20'}>
            <Flex gap={'1rem'} justify={'space-between'} vertical>
                <Flex vertical gap={'0.5rem'} className={'bg-white-color rounded-2xl p-8'}>
                    <Flex gap={'middle'} justify={'space-between'}>
                        <InputControl disabled={false}
                                      placeholder={'Document Number'}
                        />
                        <SelectControl placeholder={'Document Type'}
                                       options={[{value: 1, label: 1}, {value: 2, label: 2}]}
                        />
                        <SelectControl placeholder={'Prepare'}
                                       options={[{value: 1, label: 1}, {value: 2, label: 2}]}
                        />
                    </Flex>
                    <Flex gap={'middle'} justify={'space-between'}>
                        <SelectControl placeholder={'Contractor'}
                                       options={[{value: 1, label: 1}, {value: 2, label: 2}]}
                        />
                        <SelectControl placeholder={'Format'}
                                       options={[{value: 1, label: 1}, {value: 2, label: 2}]}
                        />
                        <SelectControl placeholder={'Bank account'}
                                       options={[{value: 1, label: 1}, {value: 2, label: 2}]}
                        />
                    </Flex>
                    <Flex gap={'middle'} justify={'space-between'}>
                        <DatePickerControl placeholder={'Invoice date'}/>
                        <DatePickerControl placeholder={'Due date'}/>
                        <SelectControl placeholder={'Payment'}
                                       options={PAYMENT_METHOD_LIST}
                        />
                    </Flex>
                </Flex>
                <Flex vertical gap={'middle'} className={'bg-white-color rounded-2xl p-8'}>
                    <Flex gap={'middle'}>
                        <div>
                            <OutlinedButtonControl text={'Add more item'} onClick={handleAddItem}/>
                        </div>
                    </Flex>
                    <div className={'w-[100%]'}>
                        <Table
                            rowSelection={{
                                ...rowSelection,
                            }}
                            columns={columns}
                            dataSource={listData}
                            pagination={false}
                        />
                    </div>
                </Flex>
            </Flex>
            <CreateInvoiceActionGroup/>
        </div>
    )
}
export default CreateInvoice

const CreateInvoiceActionGroup = () => {
    const dispatch = useDispatch();

    const handleSaveAsDraft = () => {
        dispatch(openWarningAlert({isOpenWarningAlert: true, msgAlert: 'This feature is developing'}))
    }

    return (
        <div className={'w-[100%] p-4 absolute bottom-0 bg-white-color shadow-lg rounded-2xl'}>
            <Flex gap={'middle'} justify={'space-between'}>
                <Flex gap={'middle'}>
                    Tax
                </Flex>
                <Flex gap={'middle'}>
                    <div>
                        <GradientButtonControl text={'Save'} onClick={() => {}}/>
                    </div>
                    <div>
                        <OutlinedButtonControl text={'Save as draft'} onClick={handleSaveAsDraft}/>
                    </div>
                    <div>
                        <Button>Cancel</Button>
                    </div>
                </Flex>
            </Flex>
        </div>
    )
}