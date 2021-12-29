import { configureStore } from '@reduxjs/toolkit'
import basketSlice from '../features/basket/basketSlice'


const store = configureStore(
  {
    reducer: {
      basket: basketSlice,
    }
  }
)

export default store