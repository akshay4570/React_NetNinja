const initState = {
    posts : [
        {id : 1,title : 'Squirtle laid an egg',body : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam impedit cumque quo vel cupiditate adipisci ipsam atque omnis eius ex modi eaque, nulla suscipit debitis consequuntur illum. Doloremque, ut voluptate?'},

        {id : 2,title : 'Charmander laid an egg',body : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam impedit cumque quo vel cupiditate adipisci ipsam atque omnis eius ex modi eaque, nulla suscipit debitis consequuntur illum. Doloremque, ut voluptate?'},

        {id : 3,title : 'Pikachu laid an egg',body : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam impedit cumque quo vel cupiditate adipisci ipsam atque omnis eius ex modi eaque, nulla suscipit debitis consequuntur illum. Doloremque, ut voluptate?'}
    ]
}

const rootReducer = (state = initState,action) => {
    if(action.type === 'DELETE_POST'){
        let newPost = state.posts.filter(post => action.id != post.id)
        return {
            ...state,
            posts: newPost
        }
    }
    return state;
}

export default rootReducer;