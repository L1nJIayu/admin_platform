import { useState } from 'react'
import './todoTable.scss'

import { Table, Space, Tag } from 'antd'
import { getTableDataApi } from '../../service/modules/todo'
import { useCallback } from 'react'
import { useEffect } from 'react'

import { useTable } from '../../hooks/useTable'

const tableColumns = [
  {
    title: 'ID',
    dataIndex: 'id'
  },
  {
    title: '标题',
    dataIndex: 'title'
  },
  {
    title: '状态',
    dataIndex: 'status',
    render: (status) => {
      switch(status) {
        case 0:
          return <Tag color="default">未完成</Tag>
        case 1:
          return <Tag color="success">已完成</Tag>
        case 2:
          return <Tag color="error">已超期</Tag>
        default:
          return <Tag color="default">未知:{status}</Tag>
      }
    }
  },
  {
    title: '创建时间',
    dataIndex: 'createDateTime'
  },
  {
    title: '操作',
    dataIndex: 'id',
    render: (id, row) => {
      return (
        <Space size="middle">
          <a>修改</a>
          <a>删除</a>
        </Space>
      )
    }
  }
]

const TodoTable = () => {


  const {
    tableData,
    loading,
    getTableData,
    pageData
  } = useTable({
    apiFun: getTableDataApi
  })


  useEffect(() => {
    getTableData()
  }, [getTableData])
  
  return (
    <div className="todo_table">
      <Table
        rowKey="id"
        columns={tableColumns}
        dataSource={tableData}
        loading={loading}
        pagination={pageData}></Table>
    </div>
  )
}

export default TodoTable