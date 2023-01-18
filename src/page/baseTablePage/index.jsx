import React, {useState, useEffect, useRef} from 'react'
import {Table, Button} from 'antd'
import {tableSourceData} from '@mock/';



function BaseTablePage(props){
    const [dataSource, setDataSource] = useState([])

    const columns = [
        {
           title: '名称',
           key: 'name',
           dataIndex: 'name' 
        },
        {
            title: '类型',
            key: 'type',
            dataIndex: 'type'
        }
    ]

    useEffect(() => {
        setDataSource(tableSourceData)   
    },[])

    return (
        <>
            <Table 
                columns={columns}
                dataSource={dataSource}
            />
        <Button>电机</Button>
        </>
       
    )
}

export default BaseTablePage;