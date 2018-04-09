import React from 'react'
import If from './if'

export default props => (
  <If test={props.showLoading}>
  <div className="overlay">
  </div>
    <div className="ball">
        <div className="button"></div>
    </div>
  </If>
)