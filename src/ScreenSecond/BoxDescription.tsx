import { Button } from '@mui/material';
import React from 'react'
import { BoxItem } from '../type'
import Stack from '@mui/material/Stack';
import { isEmpty } from '../utils'
interface Props{
    currentBox: BoxItem;
    changeColor(color: string): void;
    singleColor: string;
    removeCurrentBox() : void;  
}

export const BoxDescription : React.FC<Props> = ({ currentBox, changeColor, singleColor, removeCurrentBox}) => {
  const isBoxEmpty: Boolean = isEmpty(currentBox)
  const handleOnClick = (color: string) => {
    changeColor(color)
    removeCurrentBox()
  }
  const buttonStyle = {
    width: 300,
    borderRadius: 35,
    padding: "18px 36px",
    fontSize: "18px",
}
  return <div className='container'>
            <Stack direction='row'  spacing={10} >
                <Button style={buttonStyle} variant="outlined" onClick={() => handleOnClick('blue')}>Blue</Button>
                <Button style={buttonStyle} variant="outlined" onClick={() => handleOnClick('red')}>Red</Button>
            </Stack>
            {isBoxEmpty === true && <Button style={{height: 200, width: 400, backgroundColor: singleColor, marginTop: 50}}/>}
            {isBoxEmpty === false && <Button style={{height: 200, width: 400, backgroundColor: currentBox.color, marginTop: 50}}/>}
            {isBoxEmpty === false ? <h2>The selected color is {currentBox.color}</h2> : <h2>The selected color is {singleColor}</h2>}
        </div>
}