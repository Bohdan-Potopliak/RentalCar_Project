import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCars } from '../../api/carsAPI';
import { getPriceRangeFromCars } from '../../utils/priceUtils';

export const fetchCars = createAsyncThunk('cars/fetchAll', async ({ page, filters }, thunkAPI) => {
    try {
        return await getCars(page, filters);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        page: 1,
        priceRange: { minPrice: 0, maxPrice: 0 },
    },
    reducers: {
        resetCars: (state) => {
            state.items = [];
            state.page = 1;
            state.priceRange = { minPrice: 0, maxPrice: 0 };
        },
        incrementPage: (state) => {
            state.page += 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCars.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCars.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items.push(...action.payload.cars);
                state.items = state.items.filter(
                    (car, index, self) => index === self.findIndex((c) => c.id === car.id)
                );
                const { minPrice, maxPrice } = getPriceRangeFromCars(state.items);
                state.priceRange = { minPrice, maxPrice };
            })

            .addCase(fetchCars.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { resetCars, incrementPage } = carsSlice.actions;
export default carsSlice.reducer;
