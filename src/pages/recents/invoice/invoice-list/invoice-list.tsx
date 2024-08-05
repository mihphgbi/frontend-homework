import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {activeMenu, openWarningAlert} from "../../../../redux/slice/layoutSlice";
import {MENU_ITEM} from "../../../../constants/menu/menu-item.constant";
import {Col, Flex, Row, Table, TableColumnsType, Typography} from "antd";
import SelectControl from "../../../../components/select/select";
import {ItemInvoiceModel} from "../../../../models/invoice/invoice.model";
import {CONTRACTOR_LIST} from "../../../../mock-data/invoice";
import ButtonControl from "../../../../components/button/button";
import {getInvoiceList} from "../../../../redux/actions/invoice/invoice.action";
import {AppDispatch} from "../../../../redux/store/store";
import {useNavigate} from "react-router-dom";
import {CheckOutlined} from "@ant-design/icons";
import {formatDateToDDMMYYYY} from "../../../../utils/format.utils";
import {PAGINATION_CONSTANT_OPTIONS} from "../../../../constants/pagination/pagination.constant";

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
        dataIndex: 'invoiceDate',
        render: (text) => <a>{formatDateToDDMMYYYY(text.toISOString())}</a>,
    }, {
        title: 'Status',
        dataIndex: 'status',
        render: (status) => {
            const bgFillBtn = status === 'paid' ? 'var(--light-green-color)' :
                (status === 'expired' ? 'var(--light-pink-color)' : 'var(--light-yellow-color)')
            return (
                <>
                    <ButtonControl minWidth={'8rem'}
                                   btnType={'fill-btn'}
                                   bgFillBtn={bgFillBtn}
                                   style={{textTransform: 'capitalize'}}
                                   text={status}/>
                </>
            )
        },
    }, {
        title: 'Vat',
        dataIndex: 'vat',
        render: vat => {
            return (
                <>
                    {vat ? <CheckOutlined className={'text-dark-blue-color'}/> : ''}
                </>
            )
        }
    },
    {
        title: 'Exports',
        render: () => (
            <ButtonControl text={'Coming soon'} btnType={'no-outline-btn'}/>
        )
    }
];


const InvoiceListPage: React.FC<InvoiceListProps> = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [listData, setListData] = useState([]);
    const [selectionItemPerPage, setSelectionItemPerPage] = useState<number>(10);

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
                                    <ButtonControl btnType={'no-outline-btn'} text={'All'}
                                                   onClick={handleDeveloping}/>
                                    <ButtonControl btnType={'no-outline-btn'} text={'Edit'}
                                                   onClick={handleDeveloping}/>
                                    <ButtonControl btnType={'no-outline-btn'} text={'In-progress'}
                                                   onClick={handleDeveloping}/>
                                    <ButtonControl btnType={'no-outline-btn'} text={'Drafts'}
                                                   onClick={handleDeveloping}/>
                                </Flex>
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <Flex justify={'flex-end'}>
                                    <ButtonControl style={{minWidth: '8rem', minHeight: '2rem'}}
                                                   btnType={'gradient-btn'}
                                                   text={'Create'}
                                                   onClick={() => navigate('/create-invoice')}
                                    />
                                </Flex>
                            </Col>
                        </Row>

                        <Row gutter={[8, 8]}>
                            <Col className="gutter-row" flex={1}>
                                <SelectControl placeholder={'All Contractors'}
                                               options={CONTRACTOR_LIST}
                                               width={'100%'}
                                />
                            </Col>
                            <Col className="gutter-row" flex={1}>
                                <SelectControl placeholder={'VAT'}
                                               options={[{value: 1, label: 1}, {value: 2, label: 2}]}
                                />
                            </Col>
                            <Col className="gutter-row" flex={1}>
                                <SelectControl placeholder={'From'}
                                               options={[{value: 1, label: 1}, {value: 2, label: 2}]}
                                />
                            </Col>
                            <Col className="gutter-row" flex={1}>
                                <SelectControl placeholder={'To'}
                                               options={[{value: 1, label: 1}, {value: 2, label: 2}]}
                                />
                            </Col>
                            <Col className="gutter-row" flex={1}>
                                <SelectControl placeholder={'All statuses'}
                                               options={[{value: 1, label: 1}, {value: 2, label: 2}]}
                                />
                            </Col>
                        </Row>
                    </Flex>
                    <Flex vertical gap={'middle'} className={'bg-white-color rounded-2xl p-8'}>
                        <div className={'table-template-wrapper'}>
                            <Table
                                rowSelection={{
                                    ...rowSelection,
                                }}
                                columns={invoiceListColumns}
                                dataSource={listData}
                                pagination={false}
                                loading={invoice.status === 'loading'}
                            />
                        </div>
                    </Flex>
                </Flex>
                <div
                    className={'w-[100%] p-2 absolute bottom-0 bg-white-color shadow-lg rounded-lg flex flex-row align-middle'}>
                    <Typography className={'pl-2 w-16 flex items-center'}>Show:</Typography>
                    <SelectControl value={selectionItemPerPage}
                                   width={'6rem'}
                                   minWidth={'3rem'}
                                   onChange={(value) => setSelectionItemPerPage(value)}
                                   options={PAGINATION_CONSTANT_OPTIONS}/>
                </div>
            </div>
        </>
    )
}
export default InvoiceListPage
