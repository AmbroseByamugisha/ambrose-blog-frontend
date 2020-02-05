import React from 'react'
//import { withStyles } from "@material-ui/styles"
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import AllPosts from './AllPosts'

// pagination, edit and delete buttons
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function Home () {  
        const classes = useStyles()
        return(
            <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item xs>
                  {/* <Paper className={classes.paper}>xs</Paper> */}
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.paper}><AllPosts/></Paper>
                </Grid>
                <Grid item xs>
                  {/* <Paper className={classes.paper}>xs</Paper> */}
                </Grid>
              </Grid>
            </div>
        )
    
}
export default Home