import './App.css';
import { useRoutes, Link } from 'react-router-dom';
import routes from '@/router/index';
import React, { Suspense } from "react";
import { useAppSelector, useAppDispatch } from './store';
import { increment, decrement, incrementByAmount, incrementAsync } from './store/modules/counter';

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
  const dispatch = useAppDispatch();
  const { value, loading } = useAppSelector((state) => ({
    value: state.counter.value,
    loading: state.counter.loading
  }));

  return (
    <div className="App">
      <div className='nav'>
        <Link to="/discover">发现音乐</Link>
        <Link to="/focus">我的音乐</Link>
        <Link to="/download">下载客户端</Link>
        <Link to="/mine">我的</Link>
      </div>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Redux 计数器示例</h2>
        <p>当前计数: {value}</p>
        <p>加载状态: {loading ? '加载中...' : '空闲'}</p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button onClick={() => dispatch(increment())}>+1</button>
          <button onClick={() => dispatch(decrement())}>-1</button>
          <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
          <button onClick={() => dispatch(incrementAsync(10))}>异步 +10</button>
        </div>
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
