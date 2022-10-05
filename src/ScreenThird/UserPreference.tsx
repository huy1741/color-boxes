import React from 'react'
import { BoxItem } from '../type'
import { isEmpty } from '../utils'
interface Props{
    currentBox: BoxItem;
    data: BoxItem[];
}

export const UserPreferance : React.FC<Props> = ({ currentBox, data}) => {
  const isBoxEmpty: Boolean = isEmpty(currentBox)
  return <div className='container'>
            <h1>User preference</h1>
            {data.length > 0 ? <h2>There are {data.length} boxes</h2> : <h2>No boxes can be found</h2>}
            {isBoxEmpty === false ? <h2>The selected color is {currentBox.color}</h2> :  <h2>No color is selected</h2>}
        </div>
}