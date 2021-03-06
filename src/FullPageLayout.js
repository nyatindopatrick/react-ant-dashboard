import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from './authRoutes';

export default function FullPageLayout() {
  return (
    <Switch>
      {routes.map((item, i) => (
        <Route path={item.path} component={item.component} key={i} exact />
      ))}
    </Switch>
  );
}
