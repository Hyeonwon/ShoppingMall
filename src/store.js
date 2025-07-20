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
  ],
  reducers : {
      increaseCount(state, action){
        const target = state.find(item => item.id === action.payload.id)
        if (target){
          target.count += action.payload.amount
        }
      },
      decreaseCount(state, action){
        const target = state.find(item => item.id === action.payload.id)
        if (target){
          target.count -= action.payload.amount
        }
      },
      increaseData(state, action){
        const target = state.find(item => item.id === action.payload.id)
        if(target){
          target.count += action.payload.count
        }else{
          state.push (action.payload)
        }
      },
      removeData(state, action){
        return state.filter(item => item.id !== action.payload.id)
      }
  }
})

export let {increaseCount, increaseData, decreaseCount, removeData} = data.actions


export default configureStore({
  reducer: { 
    user : user.reducer,
    data : data.reducer
  }
}) 