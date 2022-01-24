import React from 'react'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import IconButton from '@mui/material/IconButton';

const More = () => {
    return (
        <>
            <IconButton aria-label="settings"  sx={{
                    //position:'relative',
                    marginLeft:'80%',
                    color:'black',
                    bottom:'41.67%',
                }} >
                <MoreHorizOutlinedIcon/>
            </IconButton>
            
        </>
    )
}

export default More;
