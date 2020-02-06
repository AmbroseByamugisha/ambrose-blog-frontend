import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withStyles } from "@material-ui/styles"
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../index.css'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { Link } from 'react-router-dom'

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


class Navbar extends Component {
    render(){
      const { classes, loggedIn } = this.props
        return(
          <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                <Link to={"/"} id="home-link">Home</Link>
              </Typography>
              {loggedIn ? <SignedInLinks />: <SignedOutLinks />}
            </Toolbar>
          </AppBar>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn
  }
}

export default withStyles(useStyles)(connect(mapStateToProps)(Navbar));