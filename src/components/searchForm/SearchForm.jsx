import {
  Form,
  Input,
  Select,
  Button
} from 'antd'
import './searchForm.scss'
import { useCallback } from 'react'
import { useEffect } from 'react'


const SearchForm = ({
  initSearchParams,
  formList=[],
  onSearch
}) => {

  const [form] = Form.useForm()

  useEffect(() => {
    if(initSearchParams) {
      form.setFieldsValue(initSearchParams)
    }
  }, [])

  const onClick = useCallback(() => {
    onSearch && onSearch(form.getFieldsValue())
  })

  const getFormItemInput = (item) => {
    switch(item.type) {
      case 'text':
        return <Input placeholder={ item.label }></Input>
      case 'select':
        return (
          <Select placeholder={ item.label } allowClear>
            {
              item.options.map(option => {
                return (
                  <Select.Option value={option.value} key={option.value}>{ option.label }</Select.Option>
                )
              })
            }
          </Select>
        ) 
    }
  }

  
  return (
    <div className="search_form">
      <Form
        form={form}
        layout="inline">
          {
            formList.map((item, index) => {
              return (
                <Form.Item name={ item.prop } key={index}>
                  { getFormItemInput(item) }
                </Form.Item>
              )
            })
          }
          <Button
            type="primary"
            onClick={onClick}>查询</Button>
      </Form>
    </div>
  )
}


export default SearchForm