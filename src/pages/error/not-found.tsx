import React, {FC, ReactElement} from 'react';
import {Link} from 'react-router-dom';

const PageNotFound: FC = (): ReactElement => {
    return (
        <div>
            <h1>404</h1>
            <p>Page not found.</p>
            <p>
                The page you are looking for might have been removed.
            </p>
            <Link to="/">
                <button color="primary">
                    Return to website
                </button>
            </Link>
        </div>
    );
};

export default PageNotFound;
