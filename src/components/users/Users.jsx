import React from 'react'
import Query from '../Search/Query'
import Table from '../users/Table'
import './Users.css'


const Users = () => {
  return (
    <div className="users">
        <div>
        <Query/>
        </div>

        <div>
          <Table/>
        </div>
    </div>
  )
}

export default Users