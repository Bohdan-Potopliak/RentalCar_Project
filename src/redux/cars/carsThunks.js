import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCars = createAsyncThunk('cars/fetchCars', async ({ filters, page = 1, limit = 8 }, thunkAPI) => {
    try {
        const params = {
            ...filters,
            page,
            limit,
        };
        Object.keys(params).forEach((key) => {
            if (params[key] === '') delete params[key];
        });

        const response = await axios.get('https://car-rental-api.goit.global/cars', { params });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
