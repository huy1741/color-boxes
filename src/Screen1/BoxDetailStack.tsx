import React from 'react'
import { BoxDetailsItem } from './BoxDetailsItem'
import { BoxItem } from '../type'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { isEmpty } from '../utils'
import Stack from '@mui/material/Stack';
interface Props{
    changeCurrentBox(id: number, color: string) : void;
    data: BoxItem[];
    currentBox: BoxItem;
    addBox(id: number, color: string): void;
    deleteBox(id: number): void;
    removeCurrentBox() : void;
    singleColor: string
}
export const BoxDetailStack : React.FC<Props> = ({changeCurrentBox, data, currentBox, addBox, deleteBox, removeCurrentBox, singleColor}) => {
    const buttonStyle = {
        width: 300,
        borderRadius: 35,
        padding: "18px 36px",
        fontSize: "18px"
    }
    console.log(singleColor)
  return <div className='container'>
            <Stack direction='row'  spacing={10} >
                <Button style={buttonStyle} variant="outlined" onClick={() => !isEmpty(currentBox) ? addBox(Math.random(), currentBox.color) : addBox(Math.random(), singleColor) }>Add</Button>
                <Button style={buttonStyle} variant="outlined" onClick={() => !isEmpty(currentBox) ? deleteBox(currentBox.id): data.length > 0 ? deleteBox(data[data.length - 1].id) : null}>Delete</Button>
                <Button style={buttonStyle} variant="outlined" onClick={removeCurrentBox}>Unselect</Button>
            </Stack>
            <Grid container>
                 {data.map((item) =><Grid key={item.id} xs={3}><BoxDetailsItem key={item.id} id={item.id} color={item.color} changeCurrentBox={changeCurrentBox} currentBox={currentBox}/></Grid>)}
            </Grid>
            <h2>There are {data.length} boxes</h2>
         </div>
}