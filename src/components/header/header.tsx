import React from "react";

const Header : React.FC<{title:string}> = ({title}) => {
    return(
        <>
            <p>{title}</p>
        </>
    )
}
export default Header