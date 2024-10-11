import { useState } from "react"

export function usePagination() {

  const [ pageData, setPageData ] = useState({
    current: 1,
    pageSize: 10,
    total: 0
  })

  return {
    pageData,
    setPageData
  }
}