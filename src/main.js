import React from "react";
import Homepage from "./homepage";
import Layanan1 from "./pages/layanan1";
import Footer from "./pages/footer";
import Portfolio from "./pages/portfolio";
import { Route,Switch } from "react-router-dom/cjs/react-router-dom.min";

export default class Main extends React.Component {
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/layanan' component={Layanan1} />
                <Route path='/contact' component={Footer} />
                <Route path='/portfolio' component={Portfolio} />
            </Switch>
        )
    }
}