import { configureStore } from '@reduxjs/toolkit'
import basketSlice from '../features/basket/basketSlice'
import  userSlice  from '../features/user/userSlice'


const store = configureStore(
  {
    reducer: {
      basket: basketSlice,
      user: userSlice
    }
  }
)

export default store