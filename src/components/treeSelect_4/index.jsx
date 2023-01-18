import React, { useState, useEffect, useRef } from 'react';
import { TreeSelect } from 'antd';

const mockData = [
  {
    id: 1,
    value: '1',
    title: 'Expand to load',
  },
  {
    id: 2,
    value: '2',
    title: 'Expand to load',
  },
  {
    id: 3,
    value: '3',
    title: 'Tree Node',
    isLeaf: true,
  },
]

function TreeSelect_4(props) {
  const [treeData, setTreeData] = useState([]);

  useEffect(() => {
    loadTreeData()
  }, [])

  const loadTreeData = () => {
    // 调取接口获取数据
    setTreeData(mockData)
  }
 

  const onSelect = () => {

  }

  const getTreeSelectData = (arr = [], title, value, isParentDisabled = false, isConnect, extra) => {
    return arr.map(item => ({
      title: isConnect && !item.children ? `${item[title]}-${item[isConnect]}` : item[title],
      value: item[value],
      isLeaf: item.isLeaf,
      [extra]: extra ? item[extra] : undefined,
      disabled: isParentDisabled && item.children ? true : false,
      children: item.children?.length
        ? getTreeSelectData(item.children, title, value, isParentDisabled, isConnect, extra)
        : undefined,
    }));
  };

  const onLoadData = treeNode => {
    const treeData = [...treeList];
    let curKey = treeNode.props.eventKey; 
    const params = { deptCode: curKey };
    const loop = (curTreeData, newChildrenData) => {
      curTreeData.forEach(item => {
        if (curKey === item.key) {
          item.children = newChildrenData; //找到当前点击的节点后加入子节点数据进去
          return;
        } else if (item.children) {
          //没有找到时如果当前节点还子节点再往下找子节点
          loop(item.children, newChildrenData);
        }
      });
    };

    return new Promise(resolve => {
      getPersonJsonByDeptId({ ...params }).then(res => {
        const { data } = res;
        if (data.state === false) {
          showError('服务请求失败,请检查服务接口处于可用状态!');
        } else {
          let newData = data.map(item => {
            if (item.isLeaf === false) {
              item.disabled = true;
            }
            return item;
          });
          loop(treeData, newData);
          setTreeList(treeData);
        }
        resolve();
      });
    });
  };
  return (
    <TreeSelect
      treeData={treeData}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="请选择分类"
      showSearch
      allowClear
      multiple
      onSelect={onSelect}
      loadData={onLoadData}
    />
  );
}

export default TreeSelect_4;
