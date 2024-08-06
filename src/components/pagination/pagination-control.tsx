import React from "react";
import {Pagination} from "antd";
import {PaginationProps} from "antd/es/pagination/Pagination";

interface PaginationControlProps extends PaginationProps{

}
const PaginationControl : React.FC<PaginationControlProps> = () => {
    return(
        <>
            <Pagination/>
        </>
    )
}
export default PaginationControl