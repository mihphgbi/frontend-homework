import React from "react";

type HeaderProps = {
    title: string
}

const Header: React.FC<HeaderProps> = ({title}) => {
    return (
        <>
            <div style={{minHeight: '70px', backgroundColor: "white", color: 'var(--dark-blue-color)'}}>
                <p>{title}</p>
            </div>
        </>
    )
}
export default Header