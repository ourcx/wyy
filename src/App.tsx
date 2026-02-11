import './App.css';
import { useRoutes, Link } from 'react-router-dom';
import routes from '@/router/index';
import React, { Suspense } from "react";
// 添加一个加载中的组件
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
      <div className='nav'>
        <Link to="/discover">发现音乐</Link>
        <Link to="/focus">我的音乐</Link>
        <Link to="/download">下载客户端</Link>
        <Link to="/mine">我的</Link>
      </div>
      <Suspense fallback={<Loading />}>
        <div className='main'>
          {useRoutes(routes)}
        </div>
      </Suspense>
    </div>
  );
}

export default App;
