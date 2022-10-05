import React from 'react'
import { BoxDetailStack } from '../Screen1/BoxDetailStack'
import { BoxDescription } from '../ScreenSecond/BoxDescription';
import { UserPreferance } from '../ScreenThird/UserPreference';
import { BoxItem } from '../type'
import  Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
interface Props{
  data: BoxItem[];
  currentBox : BoxItem;
  singleColor: string;
  addBox(id: number, color: string): void;
  deleteBox(id: number): void;
  changeColor(color: string): void;
  changeCurrentBox(id: number, color: string) : void;
  removeCurrentBox() : void;  
}
export const HomeScreen : React.FC<Props> = ({addBox, data, deleteBox, changeColor, changeCurrentBox, currentBox, removeCurrentBox, singleColor}) => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: any, newValue: string) => {
      setValue(newValue);
    };
  return <div>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange}  aria-label="lab API tabs example">
                        <Tab label="Home" value="1" />
                        <Tab label="Screen 1" value="2" />
                        <Tab label="Screen 2" value="3" />
                    </TabList>
                </Box>
            <TabPanel value="1"><BoxDetailStack data={data} changeCurrentBox={changeCurrentBox} currentBox={currentBox} addBox={addBox} deleteBox={deleteBox} removeCurrentBox={removeCurrentBox} singleColor={singleColor}/></TabPanel>
            <TabPanel value="2"><BoxDescription currentBox={currentBox} changeColor={changeColor} singleColor={singleColor} removeCurrentBox={removeCurrentBox}/></TabPanel>
            <TabPanel value="3"><UserPreferance data={data} currentBox={currentBox} singleColor={singleColor}/></TabPanel>
            </TabContext>   
        </div>
}
