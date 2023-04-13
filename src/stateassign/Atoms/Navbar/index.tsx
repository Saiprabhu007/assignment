import { AppBar, Toolbar, Typography } from '@mui/material';
import MyCheckbox from '../Checkbox';
import { useState } from 'react';
import { CheckboxProps } from '@mui/material';


const Navbar: React.FC<{}> = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
    <AppBar position="static" sx={{ backgroundColor: '#262529',marginTop:'5px' }}>
      <Toolbar>
      <MyCheckbox sx={{height:'50px',width:'30px' ,color:'#727080', borderRadius:'5px'}} size='medium' />
           
        <Typography variant="h6" component="div" sx={{ flexGrow: 1,color:'#A5A5A6' }}>
          Name 
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1,color:'#A5A5A6' }}>
          Type
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1,color:'#A5A5A6' }}>
          Per Payment
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,color:'#A5A5A6'}}>
         Term Length
        </Typography>
      </Toolbar>
    </AppBar>
    </div>
  );
};

export default Navbar;
export {}