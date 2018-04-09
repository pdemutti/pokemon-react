import React from 'react'
import If from './if'

export default props => (
  <If test={props.showAlert}>
    <div className={"alert alert-"+ props.type} role="alert">
        {props.txt}
    </div>
  </If>
)

