
import './tableLayout.scss'

const TableLayout = ({ search, table, actions }) => {

  return (
    <div className="table_layout">
      {
        search && (
          <div className='table_layout_search'>
            { search }
          </div>
        )
      }
      <div className='table_layout_content'>
        {
          actions && (
            <div className='table_layout_actions'>
              { actions }
            </div>  
          )
        }
        <div className='table_layout_table'>
          { table }
        </div>
      </div>
    </div>
  )
}

export default TableLayout