import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControllLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

import { makeStyles,ThemeProvider,createMuiTheme, IconButton, createTheme } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  root:{
    background:'linear-gradient(45deg,#333,#999)',
    border:0,
    borderRadius:50,
    color:'white',
    padding:'15px 30px'
  }
})

const theme = createMuiTheme({
  // palette:{
  //   primary:{
  //     main:orange[500]
  //   },
  //   secondary:{
  //     main:orange[500]
  //   }
  // }
})


function ButtonStyled()
{
  const classes = useStyles();
  return <Button className={classes.root}>styled button</Button>
}

function CheckboxExample()
{
  const [checked,setChecked] = useState(true)
  return(
    <>
    <FormControllLabel
      control={<Checkbox checked={checked} onChange={(e)=>setChecked(e.target.checked)} />}
     label="testing checkbox"/>
    </>
  )
}

function App() {
  return (
    
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <AppBar>
            <ToolBar>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">
                MUI Theme
            </Typography>
            <Button >
              Login
            </Button>
            </ToolBar>
          </AppBar>
          <br/>
          <br/>
          <br/>
          <br/>
          <Typography variant="h3">
            Typography Sample
          </Typography>
          <Typography variant="subtitle1">
            Typography Sample
          </Typography>
          <br/>
          <ButtonStyled />
          <br/>
          <br/>
          <TextField variant="outlined" color="secondary" type="date"/>
          <br/>
          <br/>
          <TextField variant="outlined" color="secondary" type="email" placeholder="example@gmail.com" label="email"/>
          <br/>
          <CheckboxExample />
          <br/>
          <ButtonGroup>
            <Button startIcon={<SaveIcon />} variant="contained" color="primary">Save</Button>
            <Button startIcon={<DeleteIcon />} variant="contained" color="secondary">Discard</Button>
          </ButtonGroup>
        </Container>
      </ThemeProvider>
    
  );
}

export default App;