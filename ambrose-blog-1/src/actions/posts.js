export const add_post = () => {
    return {
        type: 'ADD_POST'
    }
}
export const delete_post = (post_id) => {
    return {
        type: 'DELETE_POST',
        post_id: post_id
    }
}
export const edit_post = (post_id) => {
    return {
        type: 'EDIT_POST',
        post_id: post_id
    }
}

export const update_post = (post_id, data) => {
    return {
        type: 'UPDATE_POST',
        post_id: post_id,
        data: data

    }
}