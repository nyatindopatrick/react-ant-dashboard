import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Switch } from 'react-router-dom';

import routes from './routes';

export default function Layout() {
  const [collapsed, setCollapse] = useState(false);

  const toggleCollapsed = () => {
    setCollapse(!collapsed);
  };

  return (
    <div className="layout">
      <div className={`sidebar ${collapsed ? 'collapse-header' : null}`} >
        <Sidebar
          collapsed={collapsed}
          setCollapse={collapsed}
          toggleCollapsed={toggleCollapsed}
        />
      </div>
      <div
        className="content"
        style={{ marginLeft: collapsed ? '80px' : null }}
      >
        <div className="header">
          <Navbar />
        </div>
        <div className="body">
          <Switch>
            {routes.map((item, i) => (
              <Route
                exact
                path={item.path}
                component={item.component}
                key={i}
              />
            ))}
          </Switch>
        </div>
      </div>
    </div>
  );
}
