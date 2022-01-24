import React from 'react'
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';

type TitleProps = {
    name: string
};

const BookTitle = (props: TitleProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Typography variant='subtitle1' >
                {props.name}
            </Typography>
        </ThemeProvider>
    )
}

export default BookTitle
