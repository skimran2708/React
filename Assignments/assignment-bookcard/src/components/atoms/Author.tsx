import React from 'react';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';

type AuthorProps = {
    name: string
};

const Author = (props: AuthorProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Typography variant='body1'>
            {props.name}
            </Typography>
        </ThemeProvider>
    )
}

export default Author
