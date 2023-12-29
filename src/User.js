import React from 'react'

function User(props) {
    console.warn(props)
  return (
    <div>
      <h2>
        User component
      </h2>
      <p>{props.data.key}</p>
    </div>
  )
}

export default User
