import React, {useEffect} from "react";
import {activeMenu} from "../../../../redux/slice/layoutSlice";
import {MENU_ITEM} from "../../../../constants/menu/menu-item.constant";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../redux/store/store";
import {Col, Row, Table, Typography} from "antd";
import {columns} from "../../../../models/invoice/invoice.model";

type InvoiceDetailProps = {}
const InvoiceDetailPage: React.FC<InvoiceDetailProps> = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(activeMenu(MENU_ITEM.INVOICE_LIST))
    }, [dispatch])
    return (
        <>
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
                <Row gutter={24}>
                    <Table
                        rowKey={'id'}
                        rowSelection={{
                            ...rowSelection,
                        }}
                        columns={columns}
                        dataSource={listData}
                        pagination={false}
                    />
                </Row>
            </div>
        </>
    )
}
export default InvoiceDetailPage