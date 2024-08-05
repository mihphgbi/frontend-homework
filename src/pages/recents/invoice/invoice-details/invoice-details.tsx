import React, {useEffect, useState} from "react";
import {activeMenu} from "../../../../redux/slice/layoutSlice";
import {MENU_ITEM} from "../../../../constants/menu/menu-item.constant";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../redux/store/store";
import {Col, Row, Table, TableColumnsType, Typography} from "antd";
import {ItemInvoiceModel} from "../../../../models/invoice/invoice.model";
import ButtonControl from "../../../../components/button/button";
import {useNavigate} from "react-router-dom";
import {ArrowLeftOutlined} from "@ant-design/icons";

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
    }, {
        title: 'Amount',
        dataIndex: 'calculatedPrice',
        render: (_, record) => (
            record.unitPrice * record.quantity
        )
    }
];

type InvoiceDetailProps = {}
const InvoiceDetailPage: React.FC<InvoiceDetailProps> = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [listData, setListData] = useState<ItemInvoiceModel[]>([])

    useEffect(() => {
        dispatch(activeMenu(MENU_ITEM.INVOICE_LIST))
    }, [dispatch])
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
                        <Typography>Document Number</Typography>
                        <Typography>Contractor</Typography>
                        <Typography>Document type</Typography>
                        <Typography>Bank Account</Typography>
                        <Typography>Payment</Typography>
                    </Col>
                    <Col span={12}>
                        <Typography>Invoice date</Typography>
                        <Typography>Due Date</Typography>
                        <Typography>Format</Typography>
                        <Typography>Prepared</Typography>
                        <Typography>Status</Typography>
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