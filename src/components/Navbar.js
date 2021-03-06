import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from 'antd';

export default function Navbar() {
  return (
    <PageHeader
      className="site-page-header"
      onBack={() => null}
      title="Title"
      subTitle={
        <>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </>
      }
    />
  );
}
