import React from 'react';
import {useRoutes} from "./hook/routes.hook";
import {HashRouter} from "react-router-dom";
import Modal from "./components/Modal/Modal";

import './App.scss';


const App = () => {
    const routes = useRoutes()
    return (
            <HashRouter hashType={"noslash"}>
                <div className="App">
                    <Modal />
                    {routes}
                </div>
            </HashRouter>
    );
}

export default App;
