import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
    loading: boolean;
}

const initialState: CounterState = {
    value: 0,
    loading: false
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: { payload: number }) => {
            state.value += action.payload;
        },
        setLoading: (state, action: { payload: boolean }) => {
            state.loading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.value += action.payload;
            })
            .addCase(incrementAsync.rejected, (state) => {
                state.loading = false;
            });
    }
})

export const { increment, decrement, incrementByAmount, setLoading } = counterSlice.actions

export const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
    async (amount: number) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return amount;
    }
)

export const counterReducer = counterSlice.reducer