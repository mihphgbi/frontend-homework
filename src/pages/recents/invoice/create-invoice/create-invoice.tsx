import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {activeMenu, openWarningAlert} from "../../../../redux/slice/layoutSlice";
import {MENU_ITEM} from "../../../../constants/menu/menu-item.constant";
import {Col, Flex, Form, FormProps, Row, Table} from "antd";
import InputControl from "../../../../components/input/input";
import SelectControl from "../../../../components/select/select";
import {
    BANK_ACCOUNT_OPTION,
    CONTRACTOR_LIST,
    data, DOCUMENT_TYPE_LIST, FORMAT_LIST,
    PAYMENT_METHOD_LIST,
    PREPARE_OPTION
} from "../../../../mock-data/invoice";
import DatePickerControl from "../../../../components/date-picker/date-picker";
import {columns, InvoiceModel, ItemInvoiceModel} from "../../../../models/invoice/invoice.model";
import ButtonControl from "../../../../components/button/button";
import {createInvoiceItem} from "../../../../redux/actions/invoice/invoice.action";
import {AppDispatch} from "../../../../redux/store/store";

const {Item} = Form;

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

const initInvoiceData: InvoiceModel = {
    id: '',
    name: '',
    invoiceDate: '',
    dueDate: '',
    payment: '',
    contractor: '',
    format: '',
    createDate: '',
    updateDate: '',
    bankAccount: '',
    prepare: '',
    documentType: ''
}

type CreateInvoiceProps = {}
const CreateInvoice: React.FC<CreateInvoiceProps> = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [listData, setListData] = useState<ItemInvoiceModel[]>(data)
    const [invoiceData, setInvoiceData] = useState<InvoiceModel>(initInvoiceData)


    useEffect(() => {
        dispatch(activeMenu(MENU_ITEM.CREATE_INVOICE))
    }, [dispatch])

    const handleSaveAsDraft = () => {
        dispatch(openWarningAlert({isOpenAlert: true, msgAlert: 'This feature is developing'}))
    }


    const handleChangeInput = (value: string | number, name: string) => {
        setInvoiceData({...invoiceData, [name]: value})
        return;
    }

    const onFinish: FormProps<InvoiceModel>['onFinish'] =  (values) => {
        dispatch(createInvoiceItem({values: values}));
    };

    const onFinishFailed: FormProps<InvoiceModel>['onFinishFailed'] = (errorInfo) => {};

    const handleAddItem = () => {
        const newItem: ItemInvoiceModel = {
            id: '',
            name: '',
            quantity: 0,
            unit: '',
            unitPrice: 0,
        }
        setListData([...listData, newItem]);
    }

    return (
        <div className={'relative min-h-[100%] pb-20'}>
            <Form onFinish={onFinish}
                  onFinishFailed={onFinishFailed}>
                <Flex gap={'0.5rem'} justify={'space-between'} vertical>
                    <Flex vertical gap={'0.5rem'} className={'bg-white-color rounded-2xl p-8'}>
                        <Row gutter={24}>
                            <Col className="gutter-row" span={8}>
                                <Item<InvoiceModel> name={'name'}
                                                    rules={[{required: true, message: 'Please input document number'}]}>
                                    <InputControl placeholder={'Document Number'}
                                                  value={invoiceData.name}
                                                  onChange={(event) => handleChangeInput(event.target.value, 'name')}
                                    />
                                </Item>
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <Item<InvoiceModel> name={'documentType'}
                                                    rules={[{required: true, message: 'Please select document type'}]}>
                                    <SelectControl placeholder={'Document Type'}
                                                   onChange={(value) => handleChangeInput(value, 'documentType')}
                                                   value={invoiceData.documentType}
                                                   options={DOCUMENT_TYPE_LIST}
                                    />
                                </Item>
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <Item<InvoiceModel> name={'prepare'}
                                                    rules={[{
                                                        required: true,
                                                        message: 'Please select prepared option'
                                                    }]}>
                                    <SelectControl placeholder={'Prepared'}
                                                   value={invoiceData.prepare}
                                                   onChange={(value) => handleChangeInput(value, 'prepare')}
                                                   options={PREPARE_OPTION}
                                    />
                                </Item>
                            </Col>
                        </Row>

                        <Row gutter={24}>
                            <Col className="gutter-row" span={8}>
                                <Item<InvoiceModel> name={'contractor'}
                                                    rules={[{
                                                        required: true,
                                                        message: 'Please select contractor option'
                                                    }]}>
                                    <SelectControl placeholder={'Contractor'}
                                                   value={invoiceData.contractor}
                                                   onChange={(value) => handleChangeInput(value, 'contractor')}
                                                   options={CONTRACTOR_LIST}
                                    />
                                </Item>
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <Item<InvoiceModel> name={'format'}
                                                    rules={[{
                                                        required: true,
                                                        message: 'Please select format option'
                                                    }]}>
                                    <SelectControl placeholder={'Format'}
                                                   value={invoiceData.format}
                                                   onChange={(value) => handleChangeInput(value, 'format')}
                                                   options={FORMAT_LIST}
                                    />
                                </Item>
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <Item<InvoiceModel> name={'bankAccount'}
                                                    rules={[{
                                                        required: true,
                                                        message: 'Please select an account'
                                                    }]}>
                                    <SelectControl placeholder={'Bank account'}
                                                   value={invoiceData.bankAccount}
                                                   onChange={(value) => handleChangeInput(value, 'bankAccount')}
                                                   options={BANK_ACCOUNT_OPTION}
                                    />
                                </Item>
                            </Col>
                        </Row>

                        <Row gutter={24}>
                            <Col className="gutter-row" span={8}>
                                <Item<InvoiceModel> name={'invoiceDate'}
                                                    rules={[{
                                                        required: true,
                                                        message: 'Please select a date'
                                                    }]}>
                                    <DatePickerControl placeholder={'Invoice date'}
                                    />
                                </Item>
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <Item<InvoiceModel> name={'dueDate'}
                                                    rules={[{
                                                        required: true,
                                                        message: 'Please select a date'
                                                    }]}>
                                    <DatePickerControl placeholder={'Due date'}/>
                                </Item>
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <Item<InvoiceModel> name={'payment'}
                                                    rules={[{
                                                        required: true,
                                                        message: 'Please select a payment method'
                                                    }]}>
                                    <SelectControl placeholder={'Payment'}
                                                   value={invoiceData.payment}
                                                   options={PAYMENT_METHOD_LIST}
                                                   onChange={(value) => handleChangeInput(value, 'payment')}
                                    />
                                </Item>
                            </Col>
                        </Row>
                    </Flex>
                    <Flex vertical gap={'middle'} className={'bg-white-color rounded-2xl p-3'}>
                        <Flex gap={'middle'} justify={'flex-end'} className={'pr-4'}>
                            <div>
                                <ButtonControl text={'Add more item'} onClick={handleAddItem}/>
                            </div>
                        </Flex>
                        <div className={'w-[100%]'}>
                            <Table
                                rowKey={'id'}
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
                <div className={'w-[100%] p-4 absolute bottom-0 bg-white-color shadow-lg rounded-2xl'}>
                    <Flex gap={'middle'} justify={'space-between'}>
                        <Flex gap={'middle'}>
                            Tax
                        </Flex>
                        <Flex gap={'middle'}>
                            <div>
                                <ButtonControl style={{minWidth: '8rem'}} btnType={'gradient-btn'} text={'Save'} htmlType={'submit'}/>
                            </div>
                            <div>
                                <ButtonControl text={'Save as draft'} onClick={handleSaveAsDraft}/>
                            </div>
                            <div>
                                <ButtonControl btnType={'no-outline-btn'} text={'Cancel'} onClick={() => {
                                }}/>
                            </div>
                        </Flex>
                    </Flex>
                </div>
            </Form>
        </div>
    )
}
export default CreateInvoice