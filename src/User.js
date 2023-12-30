import React from 'react'

function User(props) {
  console.warn(props)
  const {data} = props
  return (
    <div>
      <h2>
        User component
      </h2>
      <p>{data.key}</p>
    </div>
  )
}

export default User
