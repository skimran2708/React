import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        body1:{
            fontWeight:500,
            color:'#6D787E',
            fontSize:16,
            textAlign: 'left',
            margin:'16px 0px 0px 16px'
        },

        subtitle1:{
            fontWeight:'bold',
            color:'#03314B',
            fontSize:18,
            textAlign:"left",
            margin:'23px 0px 0px 16px',
        },

        caption:{
            fontWeight:400,
            color:'#6D787E',
            fontSize:14,
        }
    }

});

export default theme;