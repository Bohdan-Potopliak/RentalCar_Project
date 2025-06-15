import { createSlice } from '@reduxjs/toolkit';
import { fetchBrands } from './brandsThunks';

const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

const brandsSlice = createSlice({
    name: 'brands',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchBrands.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchBrands.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
            })
            .addCase(fetchBrands.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default brandsSlice.reducer;
