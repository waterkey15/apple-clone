import { configureStore } from '@reduxjs/toolkit'
import { selectBasket } from '../features/basket/basketSlice'
import basketSlice from '../features/basket/basketSlice'


const store = configureStore(
  {
    reducer: {
      basket: basketSlice,
    }
  }
)

export default store