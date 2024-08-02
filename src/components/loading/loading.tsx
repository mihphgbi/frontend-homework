import './loading.style.scss.css';
import {Bars} from 'react-loader-spinner';
import {useEffect, useState} from "react";

export default function Loader() {
    const [show, setShow] = useState(false)
    useEffect(() => {
        let timeout = setTimeout(() => setShow(true), 300)
        return () => {
            clearTimeout(timeout)
        }
    }, [])


    return (
        <div className='loading'>
            {show &&
				<Bars color={'var(--dark-blue-color)'}
					  ariaLabel='bars-loading'
					  height={80}
					  width={80}/>
            }
        </div>
    );
}