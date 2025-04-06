import { configureStore } from '@reduxjs/toolkit'

import { dataSlice } from './slices/dataSlice'
import { insightSlice } from './slices/insightSlice'

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    insight: insightSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch