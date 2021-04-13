import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './styles/styles.scss';
import 'normalize.css/normalize.css'

const expenseDashboard = () => (<p>This is Expensify</p>);
const expenseCreate = () => (<div>This is Create Expense</div>);
const expenseEdit = () => (<div>This is Edit Expense</div>);
const expenseHelp = () => (<div>This is Help Expense</div>);
const notFound = () => (<div>404 Not Found!</div>);
const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={expenseDashboard} exact="true" />
            <Route path="/create" component={expenseCreate} />
            <Route path="/edit" component={expenseEdit} />
            <Route path="/help" component={expenseHelp} />
            <Route component={notFound} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));