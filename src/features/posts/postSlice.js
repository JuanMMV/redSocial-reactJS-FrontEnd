import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    id: "",
    index: "",
    isVisible:true
  },
  reducers: {
    //obtener la imagen full seleccionada mas su post con datos
    getImagePost: (state, action) => {
      const { id, index, isVisible } = action.payload;
      state.id = id;
      state.index = index;
      isVisible = isVisible
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
