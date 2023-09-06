import React from 'react'

const Method = ({variant,children}) => {
  return (
    <div className={`alert alert-${variant}`}>
    {children}
      
    </div>
  )
}

export default Message;
