import { useEffect, useCallback, useState } from 'react'
import { Table, Space, Tag, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import SearchForm from '../../../components/searchForm/SearchForm'
import { getTableDataApi } from '../../../service/modules/user'
import { useTable } from '../../../hooks/useTable'

import TableLayout from '../../../layout/table/TableLayout'
import UserForm from './UserForm'
import { userDictionary } from '../../../assets/dictionary'


const UserTable = () => {

  const searchFormList = [
    { label: '用户名', prop: 'username', type: 'text' },
    { label: '昵称', prop: 'nickname', type: 'text' },
    { label: '状态', prop: 'status', type: 'select', options: userDictionary.userStatusOptions },
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
            <a onClick={() => showForm(row)}>修改</a>
            <a>删除</a>
          </Space>
        )
      }
    }
  ]
  
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
  }, [getTableData])

  const [ isShowForm, setIsShowForm ] = useState(false)
  const [ currActionRow, setCurrActionRow ] = useState({})
  const showForm = useCallback((row={}) => {
    setIsShowForm(true)
    setCurrActionRow(row)
  }, [])
  
  return (
    <>
      <TableLayout
        search = {
          <SearchForm
            formList={searchFormList}
            onSearch={handleSearch}/>
        }
        actions = {
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={ showForm }>添加用户</Button>
        }
        table = {
          <Table
            rowKey="id"
            columns={tableColumns}
            dataSource={tableData}
            loading={loading}
            pagination={pagination} />
        }
      />

      <UserForm
        show={isShowForm}
        setShow={setIsShowForm}
        id={currActionRow.id} />
    </>
  )
}

export default UserTable