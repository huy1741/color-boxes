import { Button } from '@mui/material';
import React from 'react'
import { BoxItem } from '../type'
import { isEmpty } from '../utils'
interface Props{
    changeCurrentBox(id: number, color: string) : void;
    id: number;
    color: string;
    currentBox: BoxItem;
}

export const BoxDetailsItem : React.FC<Props> = ({changeCurrentBox, color, id, currentBox}) => {
  const selected: Boolean = !isEmpty(currentBox) && id === currentBox.id ? true : false
  return  <Button onClick={() => changeCurrentBox(id, color)} style={{height: 200, width: 400, backgroundColor: color, marginTop: 50, boxShadow: selected && '20px 20px 20px grey' }}/>
}