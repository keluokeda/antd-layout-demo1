import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import './main.css';
import Login from './Login.tsx';
import TextContent from './TextContent.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider locale={zhCN}>
    <BrowserRouter>
      <Routes>
        <Route
          element={<App />}
          path={'/admin'}
        >
          <Route
            path={'/admin/key1'}
            element={<TextContent text="1" />}
          />
          <Route
            path={'/admin/key2'}
            element={<div>222</div>}
          />
          <Route
            path={'/admin/key3'}
            element={<div>333</div>}
          />
          <Route
            path={'/admin/key4'}
            element={<div>444</div>}
          />
          <Route
            path={'/admin/key5'}
            element={<div>555</div>}
          />
        </Route>

        <Route
          element={<Login />}
          path={'/login'}
        />
      </Routes>
    </BrowserRouter>
  </ConfigProvider>
);
