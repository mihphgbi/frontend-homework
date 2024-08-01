import './loading.style.scss.css';
import {Bars} from 'react-loader-spinner';

export default function Loader() {
    return (
        <div className='loading'>
            <Bars color='#4fa94d'
                  ariaLabel='bars-loading'
                  height={80}
                  width={80} />
        </div>
    );
}