import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import '../index.css'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  

function SignedOutLinks() {
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <Link to={"/login"} id="home-link">
                <Button id="right-nav" color="inherit">
                    Login
                </Button>
            </Link> 
        </div>
    )
} 

export default SignedOutLinks