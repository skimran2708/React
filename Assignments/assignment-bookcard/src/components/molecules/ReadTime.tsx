import React from 'react'
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import theme2 from '../styles/theme2';
import useStyles from '../styles/useStyles';

type TimeProps = {
    time: number
}

const ReadTime = (props: TimeProps) => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme2}>
            <Typography variant='caption' >
                <AccessTimeIcon className={classes.iconStyle} />
                {props.time}-minute read
            </Typography>
        </ThemeProvider>
    )
}

export default ReadTime
