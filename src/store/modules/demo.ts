import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 100
}

const counterSlice = createSlice({
  name: '',
  initialState,
  reducers: {
    // 对actions解构得到payload
    changeMessageAction(state, { payload }) {
      state.count = payload
    }
  }
})

export const { changeMessageAction } = counterSlice.actions
export default counterSlice.reducer
