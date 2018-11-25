import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import ExpenseLoginPage from '../components/ExpenseLoginPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './privateRoute'
import PublicRoute from './publicRoute';

export const history = createHistory();

export const AppRouter = () => (
  <Router history={history}>
    <div>
   
      <Switch>
        <PublicRoute path = "/" component={ExpenseLoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
