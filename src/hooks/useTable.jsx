import { useState, useCallback } from 'react'

import { usePagination } from './usePagination'

export function useTable(options) {
  
  const {
    apiFun
  } = options

  const [ searchParams, setSearchParams ] = useState({})
  const [ tableData, setTableData ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const {
    pageData,
    setPageData
  } = usePagination()

  const getTableData = useCallback(async (newSearchParams) => {
    try {

      if(newSearchParams) {
        setSearchParams(newSearchParams)
      }

      newSearchParams
        ? setSearchParams(newSearchParams)
        : (newSearchParams = {})

      const params = {
        pageNum: pageData.current,
        pageSize: pageData.pageSize,
        ...searchParams,
        ...newSearchParams
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

  const onPageChange = useCallback((page, pageSize) => {
    setPageData({
      ...pageData,
      current: page,
      pageSize
    })
  }, [pageData])

  return {
    tableData,
    setTableData,
    getTableData,
    loading,
    pagination: {
      ...pageData,
      onChange: onPageChange
    }
  }
}