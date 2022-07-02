import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../features/userinfo/user'
import friendsReducer from '../features/friends/friends'
const store=configureStore({
    reducer:{
        user:userReducer,
        friends:friendsReducer
    }
})
export default store;