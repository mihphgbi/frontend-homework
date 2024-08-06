import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {activeMenu, openWarningAlert} from "../../../../redux/slice/layoutSlice";
import {MENU_ITEM} from "../../../../constants/menu/menu-item.constant";
import {Col, Flex, Pagination, Row, Table, TableColumnsType, Typography} from "antd";
import SelectControl from "../../../../components/select/select";
import {ItemInvoiceModel} from "../../../../models/invoice/invoice.model";
import {CONTRACTOR_LIST} from "../../../../mock-data/invoice";
import ButtonControl from "../../../../components/button/button";
import {getInvoiceList} from "../../../../redux/actions/invoice/invoice.action";
import {AppDispatch} from "../../../../redux/store/store";
import {Link, useNavigate} from "react-router-dom";
import {CheckOutlined, DownOutlined} from "@ant-design/icons";
import {formatDateToDDMMYYYY} from "../../../../utils/format.utils";
import {ITEM_PER_PAGE_CONSTANT} from "../../../../constants/pagination/pagination.constant";
import DatePickerControl from "../../../../components/date-picker/date-picker";

const invoiceListColumns: TableColumnsType<ItemInvoiceModel> = [
    {
        title: 'Invoice ID',
        dataIndex: 'id',
        render: (_, record) => <Link to={`/invoice-details?id=${record.id}`}>{record.name}</Link>
    },
    {
        title: 'Billed to',
        dataIndex: 'contractor',
    },
    {
        title: 'Invoice Date',
        dataIndex: 'invoiceDate',
        render: (text) => <p>{formatDateToDDMMYYYY(text.toISOString())}</p>,
    }, {
        title: 'Status',
        dataIndex: 'status',
        render: (status) => {
            const bgFillBtn = status === 'paid' ? 'var(--light-green-color)' :
                (status === 'expired' ? 'var(--light-pink-color)' : 'var(--light-yellow-color)')
            return (
                <>
                    <ButtonControl minWidth={'8rem'}
                                   btntype={'fill-btn'}
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
            <ButtonControl text={'Coming soon'} btntype={'no-outline-btn'}/>
        )
    }
];


const InvoiceListPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [listData, setListData] = useState([]);
    const [selectionItemPerPage, setSelectionItemPerPage] = useState<number>(10);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [totalCount, setTotalCount] = useState<number>(1);
    const invoice = useSelector((state: any) => state.invoice);

    useEffect(() => {
        dispatch(activeMenu(MENU_ITEM.INVOICE_LIST))
    }, [dispatch])

    useEffect(() => {
        const param = {
            userId: '00001',
            pageNumber: pageNumber,
            itemPerPage: selectionItemPerPage
        };
        dispatch(getInvoiceList(param))
    }, [pageNumber, selectionItemPerPage])

    useEffect(() => {
        setListData(invoice.invoiceList);
        setTotalCount(invoice.totalCount)
    }, [invoice])

    const handleDeveloping = () => {
        dispatch(openWarningAlert({isOpenAlert: true, msgAlert: 'This feature is developing'}))
    }
    const handlePaginationChange = (value: number) => {
        setPageNumber(value);
    }
    const handleChangeItemPerPage = (value: number) => {
        setSelectionItemPerPage(value);
        setPageNumber(1);
        setTotalCount(1);
    }

    return (
        <>
            <div className={'relative min-h-[100%] pb-20'}>
                <Flex gap={'1rem'} justify={'space-between'} vertical>
                    <Flex vertical gap={'1rem'} className={'bg-white-color rounded-2xl p-8'}>
                        <Row gutter={24}>
                            <Col className="gutter-row" span={12}>
                                <Flex gap={'0.5rem'}>
                                    <ButtonControl btntype={'no-outline-btn'} text={'All'}
                                                   onClick={handleDeveloping}/>
                                    <ButtonControl btntype={'no-outline-btn'} text={'Edit'}
                                                   onClick={handleDeveloping}/>
                                    <ButtonControl btntype={'no-outline-btn'} text={'In-progress'}
                                                   onClick={handleDeveloping}/>
                                    <ButtonControl btntype={'no-outline-btn'} text={'Drafts'}
                                                   onClick={handleDeveloping}/>
                                </Flex>
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <Flex justify={'flex-end'}>
                                    <ButtonControl style={{minWidth: '8rem', minHeight: '2rem'}}
                                                   btntype={'gradient-btn'}
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
                                <DatePickerControl suffixIcon={<DownOutlined/>} placeholder={'From'}/>
                            </Col>
                            <Col className="gutter-row" flex={1}>
                                <DatePickerControl suffixIcon={<DownOutlined/>} placeholder={'To'}/>
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
                                rowKey={'id'}
                                columns={invoiceListColumns}
                                dataSource={listData}
                                loading={invoice.status === 'loading'}
                                pagination={{
                                    onChange: handlePaginationChange,
                                    pageSize: selectionItemPerPage,
                                    current: pageNumber,
                                    position: ['bottomLeft'],
                                    total: totalCount,
                                    hideOnSinglePage: true
                                }}
                            />
                        </div>
                    </Flex>
                </Flex>
                <div
                    className={'w-[100%] p-2 absolute bottom-0 bg-white-color shadow-lg rounded-lg flex flex-row align-middle'}>
                    <Typography className={'pl-2 w-16 flex items-center text-dark-blue-color'}>Show:</Typography>
                    <SelectControl value={selectionItemPerPage}
                                   width={'7rem'}
                                   minWidth={'3rem'}
                                   onChange={(value) => handleChangeItemPerPage(value)}
                                   options={ITEM_PER_PAGE_CONSTANT}/>
                    <Typography className={'pl-2 w-16 flex items-center text-dark-blue-color'}>per page</Typography>
                </div>
            </div>
        </>
    )
}
export default InvoiceListPage
