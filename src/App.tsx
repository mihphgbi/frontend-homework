import React, {Suspense} from 'react';
import {store} from "./redux/store/store";
import {Provider} from "react-redux";
import AppRoute from "./route/app-route";
import Loader from "./components/loading/loading";
import './App.css';

//can customize multi theme here
function App() {
    return (
        <>
            <Provider store={store}>
                <Suspense fallback={<Loader/>}>
                    <AppRoute/>
                </Suspense>
            </Provider>
        </>
    );
}

export default App;
