import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ConfigProvider} from "antd";
import zhCN from 'antd/locale/zh_CN';
import './main.css'
import Login from "./Login.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ConfigProvider locale={zhCN}>
        <BrowserRouter>
            <Routes>
                <Route element={<App/>} path={'/admin/*'}/>
                <Route element={<Login/>} path={'/login'}/>
            </Routes>
        </BrowserRouter>
    </ConfigProvider>
)
