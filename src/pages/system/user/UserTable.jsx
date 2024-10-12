import { useEffect } from 'react'
import './userTable.scss'
import { Table, Space, Tag } from 'antd'
import SearchForm from '../../../components/searchForm/SearchForm'
import { getTableDataApi } from '../../../service/modules/user'
import { useTable } from '../../../hooks/useTable'
import { useCallback } from 'react'

import TableLayout from '../../../layout/table/TableLayout'


const userStatusOptions = [
  { label: '冻结', value: 0 },
  { label: '可用', value: 1 },
]
const searchFormList = [
  { label: '用户名', prop: 'username', type: 'text' },
  { label: '昵称', prop: 'nickname', type: 'text' },
  { label: '状态', prop: 'status', type: 'select', options: userStatusOptions },
]
const tableColumns = [
  {
    title: 'ID',
    dataIndex: 'id'
  },
  {
    title: '用户名',
    dataIndex: 'username'
  },
  {
    title: '昵称',
    dataIndex: 'nickname'
  },
  {
    title: '状态',
    dataIndex: 'status',
    render: (status) => {
      switch(status) {
        case 0:
          return <Tag color="default">冻结</Tag>
        case 1:
          return <Tag color="success">可用</Tag>
        default:
          return <Tag color="default">未知:{status}</Tag>
      }
    }
  },
  {
    title: '创建时间',
    dataIndex: 'createAt'
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

const UserTable = () => {

  const {
    tableData,
    getTableData,
    pagination,
    loading,
  } = useTable({
    apiFun: getTableDataApi
  })

  useEffect(() => {
    getTableData()
  }, [getTableData])

  const handleSearch = useCallback((formData) => {
    getTableData(formData)
  })
  
  return (
    <TableLayout
      search = {
        <SearchForm
          formList={searchFormList}
          onSearch={handleSearch}/>
      }
      table = {
        <Table
          className="table"
          rowKey="id"
          columns={tableColumns}
          dataSource={tableData}
          loading={loading}
          pagination={pagination} />
      }
    />
  )
}

export default UserTable