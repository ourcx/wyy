import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector,shallowEqual } from 'react-redux'
import { counterReducer } from './modules/counter'
import recommendReducer from '../views/discover/c-views/recommend/store/recommend'
const store = configureStore({
    reducer: {
        counter: counterReducer,
        recommend: recommendReducer
    },
})

type GetStateFntype = typeof store.getState
type RootState = ReturnType<GetStateFntype>
type AppDispatch = typeof store.dispatch


// typed useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
export const shallowEqualApp = shallowEqual
// redux 类型约束
export default store