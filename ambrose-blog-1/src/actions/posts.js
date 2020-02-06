export const add_post = (data) => {
    return {
        type: 'ADD_POST',
        data
    }
}
export const delete_post = (post_id) => {
    return {
        type: 'DELETE_POST',
        id: post_id
    }
}
export const edit_post = (post_id) => {
    return {
        type: 'EDIT_POST',
        id: post_id
    }
}

export const update_post = (post_id, data) => {
    return {
        type: 'UPDATE_POST',
        id: post_id,
        data
    }
}

export const toggleIsDeleted = () => {
    return{
        type: 'TOGGLE_ISDELETED'
    }
}

