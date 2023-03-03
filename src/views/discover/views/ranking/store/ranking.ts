import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getTopList } from '../service/ranking'

export const fetchRankingDataAction = createAsyncThunk(
  'fetchdata',
  (_, { dispatch }) => {
    getTopList().then((res) => {
      dispatch(changeTopListAction(res.list))
    })
  }
)

interface IRankingState {
  topList: any[]
}

const initialState: IRankingState = {
  topList: []
}

const rankingSlice = createSlice({
  name: 'ranking',
  initialState,
  reducers: {
    changeTopListAction(state, { payload }) {
      state.topList = payload
    }
  }
})

export const { changeTopListAction } = rankingSlice.actions
export default rankingSlice.reducer
