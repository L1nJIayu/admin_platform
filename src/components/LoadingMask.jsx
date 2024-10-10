import { Spin } from 'antd'
import './loadingMask.scss'

const LoadingMask = () => {
  return (
    <div className="loading_mask">
      <div className="loading">
        <Spin size="large" fullscreen={ false }></Spin>
        <div className='tip'>加载中...</div>
      </div>
    </div>
  )
}

export default LoadingMask