import React from 'react'
// import './app.css'
import './app.less'
import firstPic from '@assets/imgs/p-1.png'
import secondPic from '@assets/imgs/p-2.png'
import BaseTablePage from './page/baseTablePage';
import 'antd/dist/antd.css';

function App() {  
    return (
        <>
            <h2>webpack5-react-ts</h2>
            {/* <img src={firstPic} />
            <img src={secondPic} /> */}
            <BaseTablePage />
        </>
    )   
}
export default App