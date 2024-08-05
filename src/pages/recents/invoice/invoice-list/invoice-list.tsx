import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {activeMenu, openWarningAlert} from "../../../../redux/slice/layoutSlice";
import {MENU_ITEM} from "../../../../constants/menu/menu-item.constant";
import {Col, Flex, Row, Table, TableColumnsType} from "antd";
import SelectControl from "../../../../components/select/select";
import {columns, InvoiceModel, ItemInvoiceModel} from "../../../../models/invoice/invoice.model";
import {CONTRACTOR_LIST, data} from "../../../../mock-data/invoice";
import ButtonControl from "../../../../components/button/button";
import {getInvoiceList} from "../../../../redux/actions/invoice/invoice.action";
import {AppDispatch} from "../../../../redux/store/store";

type InvoiceListProps = {}

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

const invoiceListColumns: TableColumnsType<ItemInvoiceModel> = [
    {
        title: 'Invoice ID',
        dataIndex: 'id',
    },
    {
        title: 'Billed to',
        dataIndex: 'contractor',
    },
    {
        title: 'Invoice Date',
        dataIndex: 'unit',
    }, {
        title: 'Status',
        dataIndex: 'unitPrice',
    }, {
        title: 'Vat',
        dataIndex: 'calculatedPrice',
    },
    {
        title: 'Exports',
    }
];


const InvoiceListPage: React.FC<InvoiceListProps> = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [listData, setListData] = useState([]);
    const invoice = useSelector((state: any) => state.invoice);
    const userId = '00001';

    useEffect(() => {
        dispatch(activeMenu(MENU_ITEM.INVOICE_LIST))
        dispatch(getInvoiceList(userId))
    }, [dispatch])

    useEffect(() => {
        setListData(invoice.invoiceList);
    }, [invoice])

    const handleDeveloping = () => {
        dispatch(openWarningAlert({isOpenAlert: true, msgAlert: 'This feature is developing'}))
    }

    return (
        <>
            <div className={'relative min-h-[100%] pb-20'}>
                <Flex gap={'1rem'} justify={'space-between'} vertical>
                    <Flex vertical gap={'1rem'} className={'bg-white-color rounded-2xl p-8'}>
                        <Row gutter={24}>
                            <Col className="gutter-row" span={12}>
                                <Flex gap={'0.5rem'}>
                                    <ButtonControl btnType={'no-outline-btn'} text={'All'} onClick={handleDeveloping}/>
                                    <ButtonControl btnType={'no-outline-btn'} text={'Edit'} onClick={handleDeveloping}/>
                                    <ButtonControl btnType={'no-outline-btn'} text={'In-progress'} onClick={handleDeveloping}/>
                                    <ButtonControl btnType={'no-outline-btn'} text={'Drafts'} onClick={handleDeveloping}/>
                                </Flex>
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <Flex justify={'flex-end'}>
                                    <ButtonControl style={{minWidth: '8rem', minHeight: '2rem'}}
                                                   btnType={'gradient-btn'}
                                                   text={'Create'}
                                    />
                                </Flex>
                            </Col>
                        </Row>

                        <Row gutter={24}>
                            <Col className="gutter-row" span={4.8}>
                                <SelectControl placeholder={'All Contractors'}
                                               options={CONTRACTOR_LIST}
                                               width={'100%'}
                                />
                            </Col>
                            <Col className="gutter-row" span={4.8}>
                                <SelectControl placeholder={'VAT'}
                                               options={[{value: 1, label: 1}, {value: 2, label: 2}]}
                                />
                            </Col>
                            <Col className="gutter-row" span={4.8}>
                                <SelectControl placeholder={'From'}
                                               options={[{value: 1, label: 1}, {value: 2, label: 2}]}
                                />
                            </Col>
                            <Col className="gutter-row" span={4.8}>
                                <SelectControl placeholder={'To'}
                                               options={[{value: 1, label: 1}, {value: 2, label: 2}]}
                                />
                            </Col>
                            <Col className="gutter-row" span={4.8}>
                                <SelectControl placeholder={'All statuses'}
                                               options={[{value: 1, label: 1}, {value: 2, label: 2}]}
                                />
                            </Col>
                        </Row>
                    </Flex>
                    <Flex vertical gap={'middle'} className={'bg-white-color rounded-2xl p-8'}>
                        <Table
                            rowSelection={{
                                ...rowSelection,
                            }}
                            columns={invoiceListColumns}
                            dataSource={listData}
                            pagination={false}
                        />
                    </Flex>
                </Flex>
                <div className={'w-[100%] p-4 absolute bottom-0 bg-white-color shadow-lg rounded-2xl'}>
                    <Flex gap={'middle'} justify={'space-between'}>
                        <Flex gap={'middle'}>
                            Tax
                        </Flex>
                        <Flex gap={'middle'}>
                            <div>
                                {/*<ButtonControl btnType={'gradient-btn'} text={'Save'} onClick={() => {}}/>*/}
                            </div>
                            <div>
                                {/*<ButtonControl text={'Save as draft'} onClick={handleSaveAsDraft}/>*/}
                            </div>
                            <div>
                                {/*<ButtonControl btnType={'no-outline-btn'} text={'Cancel'} onClick={()=>{}}/>*/}
                            </div>
                        </Flex>
                    </Flex>
                </div>
            </div>
        </>
    )
}
export default InvoiceListPage
