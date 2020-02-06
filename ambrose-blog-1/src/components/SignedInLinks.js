import React from 'react'
import { connect } from 'react-redux' 
import { log_out } from '../actions'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
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
  

function SignedInLinks(props) {
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <Button id="right-nav" color="inherit" onClick={props.logOut}>
                Logout
            </Button>
        </div>
    )
} 

const mapDispatchToProps = (dispatch) => {
    return {
      logOut: () => dispatch(log_out())
    }
  }
  
export default connect(null, mapDispatchToProps)(SignedInLinks)
