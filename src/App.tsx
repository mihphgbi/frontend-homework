import React, {Suspense} from 'react';
import {store} from "./redux/store/store";
import {Provider} from "react-redux";
import AppRoute from "./route/app-route";
import Loader from "./components/loading/loading";
import {BrowserRouter} from "react-router-dom";

//can customize multi theme here
function App() {
    return (
        <>
            <Provider store={store}>
                <Suspense fallback={<Loader/>}>
                    <BrowserRouter>
                        <AppRoute/>
                    </BrowserRouter>
                </Suspense>
            </Provider>
        </>
    );
}

export default App;
