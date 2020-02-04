const initialState = [
    {
      id: 1, 
      title: 'Post One', 
      body: "Sed dui sapien, rutrum nec laoreet in, ultricies condimentum arcu"
    },
    {id: 2, 
      title: 'Post Two', 
      body: 'Orci varius natoque penatibus et magnis dis parturient montes, '
    },
    {id: 3, title: 'Post Three', body: 'Post body three'}    
]

export default (state = initialState, action) => {
    switch(action.type) {
      case 'ADD_POST':
        return state.concat([action.data])
      case 'DELETE_POST':
        return state.filter((post)=>post.id !== action.id);
      case 'EDIT_POST':
        return state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post)
      case 'UPDATE_POST':
        return state.map((post)=>{
          if(post.id === action.id) {
            return {
               ...post,
               title:action.data.newTitle,
               body:action.data.newMessage,
               editing: !post.editing
            }
          } else return post;
        })
      default:
        return state;
    }
  }
  