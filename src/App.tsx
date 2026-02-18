import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from '@/router/index';
import React, { Suspense } from "react";
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import { ConfigProvider } from 'antd';
import antdTheme from '@/assets/theme/antdTheme'; // 导入主题对象

const Loading = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div>加载中...</div>
  </div>
);

function App() {
  return (
    <div className="App">
      <ConfigProvider theme={antdTheme}> {/* 使用导入的主题对象 */}
        <AppHeader />
        <Suspense fallback={<Loading />}>
          <div className='main'>
            {useRoutes(routes)}
          </div>
        </Suspense>
        <AppFooter />
      </ConfigProvider>
    </div>
  );
}

export default App;