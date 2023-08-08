import React from 'react'
import Date from './Date'
import Search from './Search'
import Status from './Status'
import './query.css'

const Query = () => {
  return (
    <div className='query'>
        <div>
          <Search/>
        </div>
        <div  className='query-filter'>
            <div>
              <Date/>
            </div>
            <div>
                <Status/>
            </div>
        </div>
    </div>
  )
}

export default Query