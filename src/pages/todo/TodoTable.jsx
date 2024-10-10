import { useState } from 'react'
import './todoTable.scss'

import { Table, Space } from 'antd'
import { getTableDataApi } from '../../service/modules/todo'
import { useCallback } from 'react'
import { useEffect } from 'react'

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
    dataIndex: 'status'
  },
  {
    title: '创建时间',
    dataIndex: 'createDateTime'
  },
  {
    title: '操作',
    dataIndex: 'actions',
    render: (_, record) => {
      <Space size="middle">
        <a>修改</a>
        <a>删除</a>
      </Space>
    }
  }
]

const TodoTable = () => {

  const [ tableData, setTableData ] = useState([])
  const [ pageData, setPageData ] = useState({
    pageNum: 1,
    pageSize: 10,
    total: 0
  })
  const [ loading, setLoading ] = useState(false)


  const getTableData = useCallback(async () => {
    try {
      const params = {
        pageNum: pageData.pageNum,
        pageSize: pageData.pageSize
      }
      setLoading(true)
      const { list, total } = await getTableDataApi(params)
      setTableData(list)
      setPageData({
        ...pageData,
        total: total
      })
    } catch (e) {
      console.error(e)
    }
    setLoading(false)
  }, [pageData.pageNum, pageData.pageSize])

  useEffect(() => {
    console.log('getTableData')
    getTableData()
  }, [getTableData])
  
  return (
    <div className="todo_table">
      <Table
        rowKey="id"
        columns={tableColumns}
        dataSource={tableData}
        loading={loading}></Table>
    </div>
  )
}

export default TodoTable