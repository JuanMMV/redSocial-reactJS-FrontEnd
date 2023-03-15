import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    id: "",
    userName: "",
    userImage: "",
    userIdString: "",
    description: "",
    images: [],
    nLikes: 0,
    userLikes: [],
    nComment: 0,
    comments: [],
    nRetweet: 7,
    userRetweet: [],
    index: "",
  },
  reducers: {
    //obtener la imagen full seleccionada mas su post con datos
    getImagePost: (state, action) => {
      const { post, index } = action.payload;
      state.id = post.id;
      state.userName = post.userName;
      state.userImage = post.userImage;
      state.userIdString = post.userIdString;
      state.description = post.description;
      state.images = post.images;
      state.nLikes = post.nLikes;
      state.userLikes = post.userLikes;
      state.nComment = post.nComment;
      state.comments = post.comments;
      state.nRetweet = post.nRetweet;
      state.userRetweet = post.userRetweet;
      state.index = index;
      //state.push(action.payload);
    },
    deleteTemporalPost: (state, action) => {},
  },
});

export const { getImagePost } = postSlice.actions;
export default postSlice.reducer;

/**se crea una constate */
/*
const [image, setImage]=useState([{
  id, link
}])

useEffect(()=>{

})*/

/**
 * al momento de precionar la imagen
 * cambiar el link a:
 * nombreUnicoUsuario/status/post/photo/indeximagen
 * si lo hacemos asi se podria usar parammst para detonar la accion
 */
