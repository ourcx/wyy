import './App.css';
import { useRoutes, Link } from 'react-router-dom';
import routes from '@/router/index';
import React, { Suspense } from "react";
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';

const Loading = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }}>
    <div>加载中...</div>
  </div>
);

function App() {

  return (
    <div className="App">
      <AppHeader></AppHeader>
      <Suspense fallback={<Loading />}>
        <div className='main'>
          {useRoutes(routes)}
        </div>
      </Suspense>
      <AppFooter></AppFooter>
    </div>
  );
}

export default App;
