import React, {useEffect, useState} from "react";
import {activeMenu} from "../../../../redux/slice/layoutSlice";
import {MENU_ITEM} from "../../../../constants/menu/menu-item.constant";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../../../redux/store/store";
import {Col, Row, Table, TableColumnsType, Typography} from "antd";
import {initInvoiceData, InvoiceModel, ItemInvoiceModel} from "../../../../models/invoice/invoice.model";
import ButtonControl from "../../../../components/button/button";
import {useNavigate} from "react-router-dom";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {getInvoiceDetails} from "../../../../redux/actions/invoice/invoice.action";
import {formatCurrency, formatDateToDDMMYYYY} from "../../../../utils/format.utils";

export const columns: TableColumnsType<ItemInvoiceModel> = [
    {
        title: 'Details',
        dataIndex: 'name',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
    },
    {
        title: 'Rate',
        dataIndex: 'unit',
    }, {
        title: 'Price',
        dataIndex: 'unitPrice',
        render: (data) => (
            formatCurrency(data)
        )
    }, {
        title: 'Amount',
        dataIndex: 'calculatedPrice',
        render: (_, record) => (
            formatCurrency(record.unitPrice * record.quantity)
        )
    }
];

type InvoiceDetailProps = {}
const InvoiceDetailPage: React.FC<InvoiceDetailProps> = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [listData, setListData] = useState<ItemInvoiceModel[]>([])
    const [detailData, setDetailData] = useState<InvoiceModel>(initInvoiceData)
    const invoiceDetails = useSelector((state: any) => state.invoice.invoiceDetails);
    const [pageSize, setPageSize] = useState<number>(1)

    const param = {
        userId: '00003',
        invoicesID: '00004',
        itemPerPage: 10,
        pageSize: pageSize
    }

    useEffect(() => {
        dispatch(activeMenu(MENU_ITEM.INVOICE_LIST));
    }, [dispatch])

    useEffect(() => {
        dispatch(getInvoiceDetails(param));
    }, [dispatch])

    useEffect(() => {
        setListData(invoiceDetails.invoiceDetails?.detailsData?.itemInvoice)
        setDetailData(invoiceDetails.invoiceDetails?.detailsData)
    }, [invoiceDetails])

    return (
        <div>
            <div className={'mb-3'}>
                <ButtonControl iconPosition={'start'}
                               icon={<ArrowLeftOutlined className={'text-dark-blue-color'}/>}
                               text={'Back'}
                               style={{
                                   borderRadius: '1rem',
                                   border: '1px solid'
                               }}
                               onClick={() => navigate('/invoice')}/>
            </div>
            <div className={'bg-white-color rounded-2xl p-8'}>
                <Row gutter={24}>
                    <Col span={12}>
                        <Row gutter={16}>
                            <Col span={6}>
                                <Typography className={'text-dark-blue-color text-md font-medium'} >Document Number</Typography>
                            </Col>
                            <Col span={18}>
                                <Typography className={'text-dark-blue-color text-md font-medium'} >{detailData?.name}</Typography>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={6}>
                                <Typography className={'text-dark-blue-color text-md font-medium'} >Invoice date</Typography>
                            </Col>
                            <Col span={18}>
                                <Typography className={'text-dark-blue-color text-md font-medium'} >{detailData?.invoiceDate ? formatDateToDDMMYYYY(detailData?.invoiceDate?.toString()) : '-'}</Typography>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={6}>
                                <Typography className={'text-dark-blue-color text-md font-medium'} >Due Date</Typography>
                            </Col>
                            <Col span={18}>
                                <Typography className={'text-dark-blue-color text-md font-medium'} >{detailData?.dueDate ? formatDateToDDMMYYYY(detailData?.dueDate?.toString()) : '-'}</Typography>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={6}>
                                <Typography className={'text-dark-blue-color text-md font-medium'} >Contractor</Typography>
                            </Col>
                            <Col span={18}>
                                <Typography className={'text-dark-blue-color text-md font-medium'} >{detailData?.contractor}</Typography>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={6}>
                                <Typography className={'text-dark-blue-color text-md font-medium'} >Bank Account</Typography>
                            </Col>
                            <Col span={18}>
                                <Typography className={'text-dark-blue-color text-md font-medium'} >{detailData?.bankAccount}</Typography>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Row gutter={16}>
                            <Col span={6}>
                                <Typography className={'text-dark-blue-color text-md font-medium'} >Payment</Typography>
                            </Col>
                            <Col span={18}>
                                <Typography className={'text-dark-blue-color text-md font-medium'} >{detailData?.payment}</Typography>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={6}>
                                <Typography className={'text-dark-blue-color text-md font-medium'} >Format</Typography>
                            </Col>
                            <Col span={18}>
                                <Typography className={'text-dark-blue-color text-md font-medium'} >{detailData?.format}</Typography>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={6}>
                                <Typography className={'text-dark-blue-color text-md font-medium'} >Prepared</Typography>
                            </Col>
                            <Col span={18}>
                                <Typography className={'text-dark-blue-color text-md font-medium'} >{detailData?.prepared}</Typography>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={6}>
                                <Typography className={'text-dark-blue-color text-md font-medium'} >Status</Typography>
                            </Col>
                            <Col span={18}>
                                <Typography className={`text-dark-blue-color text-md font-medium`} >{detailData?.status}</Typography>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <div className={'bg-white-color rounded-2xl p-8 mt-10'}>
                <div className={'w-[100%] table-template-wrapper'}>
                    <Table
                        rowKey={'id'}
                        columns={columns}
                        dataSource={listData}
                        pagination={false}
                    />
                </div>
            </div>
        </div>
    )
}
export default InvoiceDetailPage