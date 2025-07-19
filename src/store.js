import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : {name : 'Kim', age : 20},
  reducers : {
    changeName(state){
      state.name = 'Park'
    },
    increaseAge(state, action){
      state.age += action.payload
    }
  }
})

export let {changeName, increaseAge} = user.actions

let data = createSlice({
  name : 'data',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ]
})


export default configureStore({
  reducer: { 
    user : user.reducer,
    data : data.reducer
  }
}) 