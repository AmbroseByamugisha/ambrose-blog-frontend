import React from 'react'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
      color: theme.palette.text.primary,
    },
  }));
  

function PostButtons(){
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <button>Edit</button>
            <DeleteOutlinedIcon />
            <button>Delete</button>
        </div>
    )
}

export default PostButtons