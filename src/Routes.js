import React from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, } from './layouts';

import SignIn from './views/SignIn/index'
import EventsView from './views/Events/Event'
import {
  Dashboard as DashboardView,
  UserList as UserListView,
  NotFound as NotFoundView
} from './views';

const Routes = () => {
  return (
    <Switch>
    <Route 
    exact
    path='/'
    component={SignIn}
    />
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/team"
      />
      <RouteWithLayout
        component={EventsView}
        exact
        layout={MainLayout}
        path="/events"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MainLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
