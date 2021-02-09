import './App.css';
import ListEmployeeComponent from "./components/ListEmployeeComponent";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import ViewEmployeeComponent from './components/ViewEmployeeComponent';


function App() {
    return (
        <div>
            <Router>
                    <HeaderComponent/>
                    <div className="container">
                        <Switch>
                            <Route path = "/" exact component={ListEmployeeComponent}></Route>
                            <Route path = "/employees" component={ListEmployeeComponent}></Route>
                            <Route path = "/add-employee/:id" component={CreateEmployeeComponent}></Route> {/*-1 - create operation, all positive - add operation*/}
                            <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                        </Switch>
                    </div>
                    <FooterComponent/>
            </Router>

        </div>
    );
}

export default App;
