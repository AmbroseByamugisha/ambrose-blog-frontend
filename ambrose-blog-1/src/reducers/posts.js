const initialState = {
   posts: [ {
      id: 1, 
      title: 'Post One', 
      body: "Sed dui sapien, rutrum nec laoreet in, ultricies condimentum arcu",
      deleted: false,
      editing: false
    },
    {id: 2, 
      title: 'Post Two', 
      body: 'Orci varius natoque penatibus et magnis dis parturient montes, ',
      deleted: false,
      editing: false
    },
    {
      id: 3, 
      title: 'Post Three', 
      body: 'Post body three', 
      deleted: false,
      editing: false
  } 
  ],
  isdeleted: false,
  isEditing: false   
  }

export default (state = initialState, action) => {
    switch(action.type) {
      case 'ADD_POST':
        return {
          ...state,
          posts:state.posts.concat([action.data])
        }
      case 'DELETE_POST':
        return {
          ...state,
          posts: state.posts.filter((post)=>post.id !== action.id),
          isdeleted: true
        } 
      case 'TOGGLE_ISDELETED':
        return {
          ...state,
          isdeleted: false
        }
      case 'EDIT_POST':
        return {
          ...state,
          posts: state.posts.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post),
          isEditing: true
        }
      case 'UPDATE_POST':
        return {
          ...state,
          posts: state.posts.map((post)=> post.id === action.id ? 
              {
                 ...post,
                 title:action.data.newTitle,
                 body:action.data.newBody,
                 editing: !post.editing
              } : post),
              isEditing:false
        } 
      default:
        return state;
    }
  }
  