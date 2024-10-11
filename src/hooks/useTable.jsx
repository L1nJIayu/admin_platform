import { useState, useCallback } from 'react'

import { usePagination } from './usePagination'

export function useTable(options) {
  
  const {
    apiFun,
    searchParams = {}
  } = options

  const [ tableData, setTableData ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const {
    pageData,
    setPageData
  } = usePagination()

  const getTableData = useCallback(async () => {
    try {
      const params = {
        pageNum: pageData.current,
        pageSize: pageData.pageSize,
        ...searchParams
      }
      setLoading(true)
      const { list, total } = await apiFun(params)
      setTableData(list)
      setPageData({
        ...pageData,
        total: total
      })
    } catch (e) {
      console.error(e)
    }
    setLoading(false)
  }, [pageData.current, pageData.pageSize])

  return {
    tableData,
    setTableData,
    getTableData,
    loading,
    pageData
  }
}