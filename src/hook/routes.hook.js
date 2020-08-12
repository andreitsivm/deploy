import React from "react";
import {Route, Switch} from "react-router-dom";
import Layout from "../HOC/Layout/Layout";
import Content from "../pages/Content";




export const useRoutes=()=>{

    return(<>
            <Switch>
                <Route path="/"><Layout><Content/></Layout></Route>
            </Switch>

        </>
    )
}