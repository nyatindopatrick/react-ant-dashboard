import React, { useEffect, useState } from 'react';
import './App.css';
import Layout from './AdminLayout';
import AdminLayout from './FullPageLayout';
import { useHistory } from 'react-router-dom';

function App(props) {

console.log(props)

  useEffect(() => {
  
  }, []);

  return (
    <div className="App">
      {window.location.pathname === '/login' ? <AdminLayout /> : <Layout />}
    </div>
  );
}

export default App;
