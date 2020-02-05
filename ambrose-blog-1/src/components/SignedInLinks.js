import React from 'react'

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
  

function SignedInLinks() {
    const { classes } = useStyles()
    return(
        <div className={classes.root}>
            <Button id="right-nav" color="inherit">Login</Button>
        </div>
    )
} 

export default SignedInLinks