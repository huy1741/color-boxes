import { Button } from '@mui/material';
import React from 'react'
import { BoxItem } from '../type'
import Stack from '@mui/material/Stack';
import { isEmpty } from '../utils'
interface Props{
    currentBox: BoxItem;
    changeColor(id: number, color: string): void;
    changeCurrentBox(id: number, color: string) : void;
}

export const BoxDescription : React.FC<Props> = ({ currentBox, changeColor, changeCurrentBox}) => {
  const selected: Boolean = isEmpty(currentBox)
  const buttonStyle = {
    width: 300,
    borderRadius: 35,
    padding: "18px 36px",
    fontSize: "18px",
}
  return <div className='container'>
            <Stack direction='row'  spacing={10} >
                <Button style={buttonStyle} variant="outlined" onClick={() => selected ? null : (changeColor(currentBox.id, 'blue'), changeCurrentBox(currentBox.id, 'blue'))}>Blue</Button>
                <Button style={buttonStyle} variant="outlined" onClick={() => selected ? null : (changeColor(currentBox.id, 'red'), changeCurrentBox(currentBox.id, 'red'))}>Red</Button>
            </Stack>
            {selected === false && <Button style={{height: 200, width: 400, backgroundColor: currentBox.color, marginTop: 50, boxShadow: selected && '20px 20px 20px grey' }}/>}
            {selected === false && <h2>The selected color is {currentBox.color}</h2>}
        </div>
}